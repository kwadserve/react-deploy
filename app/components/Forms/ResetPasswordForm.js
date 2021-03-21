import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Ionicon from 'react-ionicons';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import {
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
  closeMsgAction
} from 'enl-redux/actions/authActions';
import { TextFieldRedux } from './ReduxFormMUI';
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

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

class ResetPasswordForm extends React.Component { // eslint-disable-line
  state = {
    // showPassword: false,
  }

  render() {
    const {
      classes,
      handleSubmit,
      intl,
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
            <Typography variant="h4" className={classes.title} style={{ fontSize: 28 }}>
              <FormattedMessage {...messages.resetTitle} />
              {/* Forgot Password | KWAD */}
            </Typography>
            <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/register">
              <Icon className={classNames(classes.icon, classes.signArrow)}>arrow_back</Icon>
            </Button>
          </div>
          <Typography variant="caption" component="p" className={classes.subtitle} gutterBottom>
            {/* <FormattedMessage {...messages.resetSubtitle} /> */}
            <b>Forgot Password?</b>
            <br />
            Enter the email address you used when you join
          </Typography>
          {
            messagesAuth !== null || ''
              ? (
                <MessagesForm
                  variant={messagesAuth === 'LINK.PASSWORD_RESET.SENT' ? 'success' : 'error'}
                  className={classes.msgUser}
                  message={messagesAuth === 'LINK.PASSWORD_RESET.SENT' ? 'Reset link has been sent to Your\'e email' : messagesAuth}
                  onClose={closeMsg}
                />
              )
              : ''
          }
          <section className={classes.pageFormSideWrap}>
            <form onSubmit={handleSubmit}>
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
              <div className={classes.btnArea}>
                <Button variant="contained" disabled={loading} color="primary" fullWidth size="large" type="submit">
                  {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  <FormattedMessage {...messages.resetButton} />
                  {/* {!loading && <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />} */}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </Paper>
    );
  }
}

ResetPasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  messagesAuth: PropTypes.string,
  loading: PropTypes.bool,
  closeMsg: PropTypes.func.isRequired,
};

ResetPasswordForm.defaultProps = {
  messagesAuth: null,
  loading: false
};

const ResetPasswordFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(ResetPasswordForm);

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

const ResetPasswordFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordFormReduxed);

export default withStyles(styles)(injectIntl(ResetPasswordFormMapped));
