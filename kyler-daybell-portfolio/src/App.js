import React from 'react';
import { Route, Switch } from "react-router";
import Homepage from './components/home';
import Navbar from './components/navbar';
import Notfound from './components/notfound'
import './public/css/App.css';


function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/404" component={Notfound} />
        <Route component={Notfound} />
      </Switch>
    </div>
    </>
  );
}

export default App;
