import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar.js';
import Home from './components/pages/Home';
import News from './components/pages/News';
import GetInvolved from './components/pages/GetInvolved';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' exact component={News} />
        <Route path='/getinvolved' exact component={GetInvolved} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
