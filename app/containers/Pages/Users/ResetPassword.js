import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo-w.svg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ResetPasswordForm } from 'enl-components';
import { passwordForget } from 'enl-redux/actions/authActions';
import styles from '../../../components/Forms/user-jss';

class ResetPassword extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`); // eslint-disable-line
      this.props.forgotPwd(this.state.valueForm.get('email')); // eslint-disable-line
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Reset Password dd';
    const description = brand.desc;
    const { classes } = this.props;
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

        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className={classes.opening}>
              <div className={classes.openingWrap}>
                <div className={classes.openingHead}>
                  <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name} />
                  </NavLink>
                </div>

                <Typography variant="h4" component="h1" gutterBottom style={{ lineHeight: 1.1 }}>
                  {'Connect with the world\'s'}
                  <br />
                  {'Best Service Providers'}
                  &nbsp;
                </Typography>

                {/* <Typography variant="h6" component="p" className={classes.subpening}>
                  <FormattedMessage {...messages.welcomeSubtitle} />
                </Typography> */}
              </div>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <ResetPasswordForm onSubmit={(values) => this.submitForm(values)} />
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  forgotPwd: PropTypes.func.isRequired,
};

function ResetWrap(props) {
  const { handleForgotPwd } = props;
  const ResetStyled = withStyles(styles)(ResetPassword);
  return (
    <ResetStyled forgotPwd={handleForgotPwd} />
  );
}

ResetWrap.propTypes = {
  handleForgotPwd: PropTypes.func.isRequired,
};

const reducer = 'authReducer';
const mapStateToProps = state => ({
  state: state.get(reducer)
});

const mapDispatchToProps = dispatch => ({
  handleForgotPwd: bindActionCreators(passwordForget, dispatch)
});

const ResetPasswordMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetWrap);

export default ResetPasswordMapped;
