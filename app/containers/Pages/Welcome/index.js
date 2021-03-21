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
import classNames from 'classnames';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

import Paper from '@material-ui/core/Paper';
// import { ResetForm } from 'enl-components';
import { passwordForget } from 'enl-redux/actions/authActions';

import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Avatar from '@material-ui/core/Avatar';

import CameraIcon from './CameraIcon';


import styles from './welcome-jss';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
class KWADWelcome extends React.Component {
  state = {
    valueForm: [],
    location: '',
    showDAvatar: false
  }

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  changeDAvatarState = () => {
    const { showDAvatar } = this.state;
    this.setState({ showDAvatar: !showDAvatar });
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
    const { location, showDAvatar } = this.state;
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
              <Hidden smDown>
                <NavLink to="/" className={classes.brand}>
                  <img src={logo} alt={brand.name} height="23" />
                </NavLink>
              </Hidden>
            </div>

            <div className={classes.mobileViewLogo}>
              <NavLink to="/" className={classes.brand}>
                <img src={logo} alt={brand.name} height="23" />
              </NavLink>
            </div>

            <main className={classes.mainContent}>
              <div className={classes.mainContentContainer}>

                <div className={classes.topHeader}>
                  <Typography variant="h1">
                    Welcome! Let’s create your profile
                  </Typography>
                  <Typography component="p">
                    Let others get to know you better! You can do these later
                  </Typography>
                </div>
                <section className={classes.stepViewContent}>
                  <div className={classes.avatarUpload}>
                    <div className={classes.formFieldLabel}>Add an avatar</div>
                    <div className={classes.avatarUploadContainer}>
                      <div className={classes.avatarUploadDropzone}>
                        <div id="avatar-uploader" className="drag-drop-container">
                          <div className={classes.dropArea}>
                            <div className={classes.dropAreaHelp}>
                              <CameraIcon />
                            </div>
                          </div>
                          <label htmlFor="dropZoneFile" className={classes.formFieldLabel}>
                            <input className={classes.inputHidden} id="dropZoneFile" value="" type="file" name="files[]" accept="image/gif,image/jpeg,image/pjpeg,image/png,image/x-png" />
                          </label>
                        </div>
                      </div>
                      <div className={classes.avatarUploadActions}>
                        <div id="avatar-uploader-button" className={classes.avatarUploaderButton}>
                          <Button variant="outlined" type="button"> Choose image </Button>
                          <label className="drag-drop-label" htmlFor="chooseImage">
                            <input className={classes.inputHidden} id="chooseImage" value="" type="file" name="files[]" accept="image/gif,image/jpeg,image/pjpeg,image/png,image/x-png" />
                          </label>
                        </div>
                        <div style={{ position: 'relative' }}>
                          <a className={classes.avatarSelectTrigger} onClick={this.changeDAvatarState} aria-hidden="true">
                            <span style={{ color: '#9e9ea7', marginRight: '5px', display: 'flex' }} className={classNames(showDAvatar && classes.dATriggerIconActive, classes.dATriggerIcon)}>
                              <KeyboardArrowRight />
                            </span>
                            <span className={classes.avatarSelectTriggerText}> Or choose one of our defaults     </span>
                          </a>
                          {showDAvatar && (
                            <div className={classes.row} style={{ marginTop: 10 }}>
                              <Avatar alt="Default Profile 1" src="https://dribbble.com/assets/default_avatars/avatar-3-8ab9e2fb844f87c116f4b19cd7ee5da75e3bf913eec6c621c575d9c545a85094.png" className={classes.dAvatar} />
                              <Avatar alt="Default Profile 2" src="https://dribbble.com/assets/default_avatars/avatar-3-8ab9e2fb844f87c116f4b19cd7ee5da75e3bf913eec6c621c575d9c545a85094.png" className={classes.dAvatar} />
                              <Avatar alt="Default Profile 3" src="https://dribbble.com/assets/default_avatars/avatar-3-8ab9e2fb844f87c116f4b19cd7ee5da75e3bf913eec6c621c575d9c545a85094.png" className={classes.dAvatar} />
                              <Avatar alt="Default Profile 4" src="https://dribbble.com/assets/default_avatars/avatar-3-8ab9e2fb844f87c116f4b19cd7ee5da75e3bf913eec6c621c575d9c545a85094.png" className={classes.dAvatar} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.formFieldLabel}>Add your location</div>
                  <div>
                    {/* <label htmlFor="location" className={classes.formFieldLabel}>
                      Add your location
                      <span className="error-marker">
                        <input className={classes.formFieldInput} id="location" type="text" placeholder="Enter a location" />
                      </span>
                    </label> */}

                    <ThemeProvider theme={theme}>
                      <TextField
                        className={classes.formFieldInputV2}
                        placeholder="Enter a location"
                        id="mui-theme-provider-standard-input"
                        value={location}
                        onChange={this.handleLocationChange}
                      />
                    </ThemeProvider>
                  </div>
                </section>

                <div className={classes.stepViewNavigation}>
                  <div className={classes.navigationNext}>
                    <Button type="button" className={classes.navigationNextBtn} onClick={() => history.push('/welcome-choose')} disabled={!location}> Next </Button>
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

KWADWelcome.propTypes = {
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

const KWADWelcomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(KWADWelcome);

export default withStyles(styles)(KWADWelcomeMapped);
