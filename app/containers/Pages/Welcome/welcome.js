import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  WelcomeCard
} from 'enl-components';
import { passwordForget } from 'enl-redux/actions/authActions';

import Button from '@material-ui/core/Button';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import styles from './welcome-jss';

class KWADWelcomeChoose extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`); // eslint-disable-line
      this.props.handleForgotPwd(this.state.valueForm.get('email')); // eslint-disable-line
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Connect with the world\'s Best Service Providers';
    const description = brand.desc;
    const { classes, history } = this.props;
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.stepContent}>
          <Paper className={classes.stepContentWrap}>

            <div className={classes.topNav}>
              <div className={classes.navLeft}>
                <Hidden smDown>
                  <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name} height="23" />
                  </NavLink>
                </Hidden>
                <Button className={classes.navigationBtn} type="button" onClick={() => history.push('/welcome')}><KeyboardArrowLeft /></Button>
              </div>

              <div className={classes.mobileViewLogo}>
                <NavLink to="/" className={classes.brand}>
                  <img src={logo} alt={brand.name} height="23" />
                </NavLink>
              </div>
            </div>


            <main className={classes.mainContent}>
              <div className={classes.mainContentContainer} style={{ maxWidth: 1020 }}>

                <div className={classes.topHeader} style={{ textAlign: 'center' }}>
                  <Typography variant="h1">
                    What brings you to Kwad
                  </Typography>
                  <Typography component="p" className={classes.subTitle}>
                    Select the options that best describe you. Don’t worry, you can explore. other options later.
                  </Typography>
                </div>
                <section className={classes.stepViewContent}>
                  <div className={classes.chooseBox}>
                    <WelcomeCard WTitle="title here" />
                    <WelcomeCard WTitle="I am looking to share my work" />
                    <WelcomeCard WTitle="I am looking to hire" />
                  </div>

                  {/* <Grid item md={6}>
                    <Typography variant="button" className={classes.divider}>Quoted Card</Typography>
                    <div>
                      <GeneralCard liked={1} shared={20} commented={15}>
                        <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
                      </GeneralCard>
                    </div>
                    <div>
                      <Typography variant="button" className={classes.divider}>Identity Card</Typography>
                      <IdentityCard
                        title="Contact and Address Card"
                        name={dummy.user.name}
                        avatar={dummy.user.avatar}
                        phone="(+8543201213)"
                        address="Town Hall Building no.45 Block C - ABC Street"
                      />
                    </div>
                  </Grid> */}

                </section>

                <div className={classes.stepViewNavigation} style={{ justifyContent: 'center' }}>
                  <div className={classes.navigationNext}>
                    <Button type="button" className={classes.navigationNextBtn}> Next </Button>
                  </div>
                </div>

              </div>
            </main>
          </Paper>
        </div>
        <Hidden smDown>
          <div className={classes.sideBar}>
            <div className={classes.stepViewSideBar}>
              <div className={classes.sideBarBG} />
              <Typography variant="h4" component="p" className={classes.sideBarArtBy}>
                {'Art by '}
                <a href="/user-url" target="_blank" className={classes.link} style={{ color: '#fff' }}>User</a>
              </Typography>
            </div>
          </div>
        </Hidden>

      </div>
    );
  }
}

KWADWelcomeChoose.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleForgotPwd: PropTypes.func.isRequired,
};

const reducer = 'authReducer';
const mapStateToProps = state => ({
  state: state.get(reducer)
});

const mapDispatchToProps = dispatch => ({
  handleForgotPwd: bindActionCreators(passwordForget, dispatch)
});

const KWADWelcomeChooseMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(KWADWelcomeChoose);

export default withStyles(styles)(KWADWelcomeChooseMapped);
