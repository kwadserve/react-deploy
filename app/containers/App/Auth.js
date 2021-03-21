import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Outer from '../Templates/Outer';
import {
  Login, Register,
  LoginFullstack, RegisterFullstack,
  ResetPassword, ResetPasswordFullstack,
  ComingSoon, Maintenance, TermsConditions, PrivacyPolicy
} from '../pageListAsync';

class Auth extends React.Component {
  render() {
    return (
      <Outer>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/login" component={LoginFullstack} />
          <Route path="/register" component={RegisterFullstack} />
          <Route path="/reset" component={ResetPasswordFullstack} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </Outer>
    );
  }
}

export default Auth;
