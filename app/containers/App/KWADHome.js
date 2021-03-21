import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KWADV1 from '../Templates/KWADV1';
import { KWADHomePage, NotFound } from '../pageListAsync';

class KWADHome extends React.Component {
  render() {
    return (
      <KWADV1>
        <Switch>
          <Route path="/home" component={KWADHomePage} />
          <Route component={NotFound} />
        </Switch>
      </KWADV1>
    );
  }
}

export default KWADHome;
