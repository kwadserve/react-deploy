import React from 'react';
// import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import logoWhite from 'enl-images/logo-w.svg';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Close from '@material-ui/icons/Close';

//
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';

import styles from './hire-jss';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class KWADHireStepThree extends React.Component {
  state = {
    title: '',
    description: ''
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { classes, history } = this.props;
    const { title, description } = this.state;

    return (
      <div className={classes.rootFull}>

        <div className={classes.stepContent} style={{ order: '3' }}>
          <Paper className={classes.stepContentWrap}>

            <div className={classes.topNav}>
              <div className={classes.navLeft}>
                <Button className={classes.navigationBtn} type="button" onClick={() => history.push('/hires2')}><KeyboardArrowLeft /></Button>
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

                <div className={classes.topHeader}>
                  <Typography variant="h1">
                    {"Let's find you a {choosed option} by creating your first project listing"}
                  </Typography>
                  <Typography component="p">
                    description .dfkld kfkadf,d.
                  </Typography>
                </div>
                <section className={classes.stepViewContent}>
                  <div className={classes.formFieldLabel}>Enter a project title</div>
                  <div className="theme-underlined form-field" componenttype="textInputBox" required="required" style={{ marginBottom: 40 }}>
                    <ThemeProvider theme={theme}>
                      <TextField
                        className={classes.formFieldInputV2}
                        placeholder="e.g. I am looking for a .... "
                        id="p-title"
                        value={title}
                        onChange={this.handleTitleChange}
                      />
                    </ThemeProvider>
                  </div>
                  <div className={classes.formFieldLabel}>Briefly describe your project</div>
                  <div className="theme-underlined form-field" componenttype="textInputBox" required="required" style={{ marginBottom: 40 }}>
                    <ThemeProvider theme={theme}>
                      <TextField
                        className={classes.formFieldInputV2}
                        placeholder="e.g. I am looking for a .... to "
                        id="p-description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={this.handleDescriptionChange}
                      />
                    </ThemeProvider>
                  </div>
                  <div>
                    <h3 style={{ color: '#9e9ea7', fontSize: 15, fontWeight: 'bold' }}>Post Preview</h3>
                    <div className={classes.ppreview}>
                      <Typography variant="h3">
                        { title || 'e.g. I’m looking for a ...' }
                      </Typography>
                      <Typography component="p">
                        { description || 'e.g. I’m looking for a ... to...' }
                      </Typography>
                      <Avatar className={classes.ppAvatar}>
                        <Person />
                      </Avatar>
                    </div>
                  </div>
                </section>

                <div className={classes.stepViewNavigation}>
                  <div className={classes.navigationNext}>
                    <Button type="button" className={classes.navigationNextBtn} disabled={!title || !description}> Post project </Button>
                  </div>
                  <div className={classes.navigationSkip}>
                    <Button type="button" variant="outlined" className={classes.navigationSkipBtn} onClick={() => history.push('/')}> Skip </Button>
                  </div>
                </div>
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
                Some text goes here.
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

KWADHireStepThree.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(KWADHireStepThree);
