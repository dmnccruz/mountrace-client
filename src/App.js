import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';

import Screening from './pages/Screening';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/symptoms" component={Section1}/>
              <Route exact path="/procedure" component={Section2}/>
              <Route exact path="/about" component={Section3}/>
              <Route exact path='/screening' component={Screening} />
              <Route path="/" component={LandingPage}/>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
