import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  KWADHomePage,
  NotFound
} from '../pageListAsync';

class KWADApplication extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          { /* Home */ }
          <Route exact path="/app" component={KWADHomePage} />
          {/* <Route path="/app/dashboard" component={DashboardPage} /> */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

KWADApplication.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default KWADApplication;
