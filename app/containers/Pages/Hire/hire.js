import React from 'react';
// import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import logoWhite from 'enl-images/logo-w.svg';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Close from '@material-ui/icons/Close';

import HStepOne from './HStepOne';
import HStepTwo from './HStepTwo';
import HStepThree from './HStepThree';
import HStepFour from './HStepFour';

import styles from './hire-jss';

class KWADHire extends React.Component {
  state = {
    currentStep: 1
  }

  _next = () => {
    let { currentStep } = this.state;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep
    });
  }

  _prev = () => {
    let { currentStep } = this.state;
    if (currentStep === 1) {
      const { history } = this.props;
      history.push('/welcome-choose');
    }

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep
    });
  }

  nextStep = () => {
    const { currentStep } = this.state;
    if (currentStep < 4) {
      console.log('next step change here');
      this._next();
    }
  }

  render() {
    const { classes } = this.props;
    const { currentStep } = this.state;

    return (
      <div className={classes.rootFull}>

        <div className={classes.stepContent} style={{ order: '3' }}>
          <Paper className={classes.stepContentWrap}>

            <div className={classes.topNav}>
              <div className={classes.navLeft}>
                <Button className={classes.navigationBtn} type="button" onClick={this._prev}><KeyboardArrowLeft /></Button>
              </div>

              <div className={classes.mobileViewLogo}>
                <NavLink to="/" className={classes.brand}>
                  <img src={logo} alt={brand.name} height="23" />
                </NavLink>
              </div>
              <div className={classes.navRight}>
                <Button className={classes.navigationBtn} type="button"><Close /></Button>
              </div>
            </div>


            <main className={classes.mainContent}>
              <div className={classes.mainContentContainer}>
                <HStepOne
                  classes={classes}
                  currentStep={currentStep}
                  nextStep={this.nextStep}
                />
                <HStepTwo
                  classes={classes}
                  currentStep={currentStep}
                  nextStep={this.nextStep}
                />
                <HStepThree
                  classes={classes}
                  currentStep={currentStep}
                  nextStep={this.nextStep}
                />
                <HStepFour
                  classes={classes}
                  currentStep={currentStep}
                />
                {/* <div className={classes.topHeader}>
                  <Typography variant="h1">
                    Who are you looking to hire?
                  </Typography>
                </div>
                <section className={classes.stepViewContent}>
                  <List component="nav" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <HListItem title="Consultants" />
                    <HListItem title="Psychologist" />
                    <HListItem title="Lawyers" />
                    <HListItem title="Mentor" />
                    {/* <ListItem button className={classes.liteItemV1}>
                      <ListItemText primary="Consultants" />
                    </ListItem>
                    <ListItem button className={classes.liteItemV1}>
                      <ListItemText primary="Mentor" />
                    </ListItem> * old *\/}
                  </List>
                </section>

                <div className={classes.stepViewNavigation}>
                  <div className={classes.navigationNext}>
                    <Button type="button" className={classes.navigationNextBtn} onClick={() => history.push('/hires1')}> Next </Button>
                  </div>
                </div> */}

              </div>
            </main>

          </Paper>


        </div>

        <Hidden smDown>
          <div className={classes.sideBar}>
            <div className={classes.stepViewSideBar}>
              <NavLink to="/" className={classes.brand} style={{ position: 'absolute', zIndex: '2', padding: '40px 40px 0' }}>
                <img src={logoWhite} alt={brand.name} height="23" />
              </NavLink>
              <div className={classes.sideBarBG} />
              {/* <Typography
                variant="h3"
                style={{
                  position: 'absolute', zIndex: 10, color: '#fff', padding: '0 40px', top: '3em', fontSize: 32, fontWeight: 'bold'
                }}
              >
                    What brings you to Kwad
              </Typography> */}
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

KWADHire.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(KWADHire);
