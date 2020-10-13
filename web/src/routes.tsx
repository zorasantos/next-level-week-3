import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMaps from './pages/OrphanageMaps'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/orphanage" component={OrphanageMaps}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;