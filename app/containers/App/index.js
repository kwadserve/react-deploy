import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
// added
import {
  WelcomeSetup, WelcomeSetupChoose, KWADHire
} from '../pageListAsync';
import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import Application from './Application';
import KWADApplication from './KWADApplication';
import KWADHome from './KWADHome';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route path="/" exact component={LoginDedicated} />
              <Route
                path="/demo"
                render={(props) => <Application {...props} changeMode={changeMode} />}
              />
              {/* <Route component={OnBoarding} /> */}
              {/* @testing -phase */}
              <Route
                path="/app"
                render={(props) => <KWADApplication {...props} changeMode={changeMode} />}
              />
              <Route path="/home" component={KWADHome} />
              <Route path="/welcome" component={WelcomeSetup} />
              <Route path="/welcome-choose" component={WelcomeSetupChoose} />
              <Route path="/hire" component={KWADHire} />

              <Route component={Auth} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
