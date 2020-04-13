import React from 'react';
import { Route, Switch } from "react-router";
import HomePage from './components/home';
import AboutPage from './components/about'
import ExamplesPage from './components/examples'
import ProjectsPage from './components/projects'
import JestExample from './components/code-examples/jest'
import MysqlExample from './components/code-examples/mysql'
import NodeControllerExample from './components/code-examples/nodecontroller'
import NodeServiceExample from './components/code-examples/nodeservices'
import ExpressExample from './components/code-examples/express'
import NodeMysqlExample from './components/code-examples/nodemysql'
import ReactExample from './components/code-examples/react'
import Navbar from './components/navbar';
import Notfound from './components/notfound'
import './public/css/App.css';


function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/Examples" component={ExamplesPage} />
        <Route path="/Projects" component={ProjectsPage} />
        <Route path="/Jest" component={JestExample} />
        <Route path="/Mysql" component={MysqlExample} />
        <Route path="/NodeController" component={NodeControllerExample} />
        <Route path="/NodeService" component={NodeServiceExample} />
        <Route path="/Express" component={ExpressExample} />
        <Route path="/NodeMysql" component={NodeMysqlExample} />
        <Route path="/React" component={ReactExample} />
        <Route path="/404" component={Notfound} />
        <Route component={Notfound} />
      </Switch>
    </div>
    </>
  );
}

export default App;
