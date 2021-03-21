import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Ionicon from 'react-ionicons';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import {
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
  closeMsgAction
} from 'enl-redux/actions/authActions';
import { CheckboxRedux, TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import styles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.get('password')) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

class RegisterFormFirebase extends React.Component { // eslint-disable-line
  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {
      classes,
      handleSubmit,
      // pristine,
      // submitting,
      intl,
      signInWithGithubFn,
      signInWithGoogleFn,
      signInWithTwitterFn,
      messagesAuth,
      closeMsg,
      loading
    } = this.props;
    return (
      <Paper className={classes.sideWrap}>
        <div style={{ width: '90%' }}>
          <Hidden mdUp>
            <div className={classes.headLogo}>
              <NavLink to="/" className={classes.brand}>
                <img src={logo} alt={brand.name} />
                {/* {brand.name} */}
              </NavLink>
            </div>
          </Hidden>
          <div className={classes.topBar}>
            <Typography variant="h4" className={classes.title}>
              {/* <FormattedMessage {...messages.register} /> */}
              Sign up
            </Typography>
            <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
              {/* <Icon className={classNames(classes.icon, classes.signArrow)}>arrow_forward</Icon> */}
              <FormattedMessage {...messages.toAccount} />
            </Button>
          </div>
          {
            messagesAuth !== null || ''
              ? (
                <MessagesForm
                  variant="error"
                  className={classes.msgUser}
                  message={messagesAuth}
                  onClose={closeMsg}
                />
              )
              : ''
          }
          <section>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="fullname"
                      component={TextFieldRedux}
                      placeholder={intl.formatMessage(messages.loginFieldName)}
                      label={intl.formatMessage(messages.loginFieldName)}
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="name"
                      component={TextFieldRedux}
                      placeholder={intl.formatMessage(messages.loginFieldUserName)}
                      label={intl.formatMessage(messages.loginFieldUserName)}
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder={intl.formatMessage(messages.loginFieldEmail)}
                    label={intl.formatMessage(messages.loginFieldEmail)}
                    required
                    validate={[required, email]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="password"
                    component={TextFieldRedux}
                    type="password"
                    label={intl.formatMessage(messages.loginFieldPassword)}
                    required
                    validate={[required, passwordsMatch]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div>
                {/* Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings. */}
                {/* <FormControlLabel control={<Field name="checkbox" required component={CheckboxRedux} className={classes.agree} />} label={intl.formatMessage(messages.aggree)} /> */}
                <FormControlLabel control={<Field name="checkbox" required component={CheckboxRedux} className={classes.agree} />} label={["Creating an account means you're okay with our ", <a href="/terms-conditions" target="_blank" className={classes.link}>Terms of Service</a>, ', ', <a href="/privacy-policy" target="_blank" className={classes.link}>Privacy Policy</a>, ' and default ', <a href="/d-notification-policy" target="_blank" className={classes.link}>Notification Settings.</a>]} />

              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" fullWidth disabled={loading} color="primary" type="submit">
                  {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  {/* <FormattedMessage {...messages.loginButtonContinue} /> */}
                  Sign Up
                </Button>
              </div>
            </form>
          </section>
          <h5 className={classes.divider}>
            <FormattedMessage {...messages.registerOr} />
          </h5>
          <section className={classes.socmedSideLogin}>
            <Button
              variant="contained"
              className={classes.googleBtn}
              type="button"
              size="large"
              onClick={signInWithGoogleFn}
            >
              <i className="ion-social-google" />
            </Button>
            <Button
              variant="contained"
              className={classes.twitterBtn}
              type="button"
              size="large"
              onClick={signInWithTwitterFn}
            >
              <i className="ion-social-twitter" />
            </Button>
            <Button
              variant="contained"
              className={classes.linkedInBtn}
              type="button"
              size="large"
              onClick={signInWithGithubFn}
            >
              <i className="ion-social-linkedin" />
            </Button>
          </section>
        </div>
      </Paper>
    );
  }
}

RegisterFormFirebase.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  signInWithGithubFn: PropTypes.func.isRequired,
  signInWithGoogleFn: PropTypes.func.isRequired,
  signInWithTwitterFn: PropTypes.func.isRequired
};

RegisterFormFirebase.defaultProps = {
  messagesAuth: null
};

const RegisterFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(RegisterFormFirebase);

const mapDispatchToProps = {
  signInWithGithubFn: signInWithGithub,
  signInWithGoogleFn: signInWithGoogle,
  signInWithTwitterFn: signInWithTwitter,
  closeMsg: closeMsgAction
};

const reducerAuth = 'authReducer';
const mapStateToProps = state => ({
  messagesAuth: state.get(reducerAuth).message,
  loading: state.get(reducerAuth).loading,
  ...state,
});

const RegisterFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormReduxed);

export default withStyles(styles)(injectIntl(RegisterFormMapped));
