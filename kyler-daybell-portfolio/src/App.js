import React from 'react';
import { Route, Switch } from "react-router";
import HomePage from './components/home';
import AboutPage from './components/about'
import ExamplesPage from './components/examples'
import Navbar from './components/navbar';
import Notfound from './components/notfound'
import './public/css/App.css';


function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Examples" component={ExamplesPage} />
        <Route path="/404" component={Notfound} />
        <Route component={Notfound} />
      </Switch>
    </div>
    </>
  );
}

export default App;
