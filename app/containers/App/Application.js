import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          { /* Home */ }
          <Route exact path="/demo" component={BlankPage} />
          <Route path="/demo/dashboard" component={DashboardPage} />
          <Route path="/demo/form" component={Form} />
          <Route path="/demo/table" component={Table} />
          <Route path="/demo/page-list" component={Parent} />
          <Route path="/demo/pages/not-found" component={NotFound} />
          <Route path="/demo/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
