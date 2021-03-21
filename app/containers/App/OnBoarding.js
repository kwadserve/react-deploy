import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import OuterNobg from '../Templates/OuterNobg';
import {
  //   WelcomeSetup,
  PrivacyPolicy
} from '../pageListAsync';

class OnBoarding extends React.Component {
  render() {
    return (
      <OuterNobg>
        <Switch>
          {/* KWADWelcome */}
          <Route component={NotFound} />
        </Switch>
      </OuterNobg>
    );
  }
}

export default OnBoarding;
