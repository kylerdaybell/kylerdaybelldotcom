import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../public/css/examplepage.css'
import nodelogo from '../public/images/NodeLogo.png'
import expressslogo from '../public/images/ExpressLogo.png'
import reactlogo from '../public/images/ReactLogo.png'
import jestlogo from '../public/images/JestLogo.png'
import mysqllogo from '../public/images/MySQLLogo.png'


class ExamplesPage extends Component {
    render() {
        return (
            <>
                <div className="node-example">
                    <NavLink className="bar-item roboto-text-thin" to="/NodeController">         
                        <div className="card">
                            <img className="card-logo" src={nodelogo}/>
                            <h1 className="no-wrap-ellipsis">Node Controller</h1>
                        </div>
                    </NavLink>

            
                    <NavLink className="bar-item roboto-text-thin" to="/NodeService">
                        <div className="card">
                            <img className="card-logo" src={nodelogo}/>
                            <h1 className="no-wrap-ellipsis">Node Services</h1>
                        </div>
                    </NavLink>


                    <NavLink className="bar-item roboto-text-thin" to="/Express">
                        <div className="card">
                            <img className="card-logo" src={expressslogo}/>
                            <h1 className="no-wrap-ellipsis">Express</h1>
                        </div>
                    </NavLink>


                    <NavLink className="bar-item roboto-text-thin" to="/react">
                        <div className="card">
                            <img className="card-logo" src={reactlogo}/>
                            <h1 className="no-wrap-ellipsis">React</h1>
                        </div>
                    </NavLink>

                    <NavLink className="bar-item roboto-text-thin" to="/Jest">
                        <div className="card">
                            <img className="card-logo" src={jestlogo}/>
                            <h1 className="no-wrap-ellipsis">Jest testing</h1>
                        </div>
                    </NavLink >

                    <NavLink className="bar-item roboto-text-thin" to="/NodeMysql">
                        <div className="card">
                            <img className="card-logo" src={mysqllogo}/>
                            <h1 className="no-wrap-ellipsis">MySQL2 Parameterized SQL</h1>
                        </div>
                    </NavLink>

                    <NavLink className="bar-item roboto-text-thin" to="/Mysql">             
                        <div className="card">
                            <img className="card-logo" src={mysqllogo}/>
                            <h1 className="no-wrap-ellipsis">MySQL</h1>
                        </div>
                    </NavLink>
                </div>
            </>
        );
    }
}

export default ExamplesPage;