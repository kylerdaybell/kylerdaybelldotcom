import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg';
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
                    <a href="/NodeController">
                        <div className="card">
                            
                            <img className="card-logo" src={nodelogo}/>
                            <h1 className="no-wrap-ellipsis">Node Controller</h1>
                        </div>
                    </a>

            
                    <a href="/NodeServices">
                        <div className="card">
                            <img className="card-logo" src={nodelogo}/>
                            <h1 className="no-wrap-ellipsis">Node Services</h1>
                        </div>
                    </a>


                    <a href="/NodeExpress">
                        <div className="card">
                            <img className="card-logo" src={expressslogo}/>
                            <h1 className="no-wrap-ellipsis">Express</h1>
                        </div>
                    </a>


                    <a href="/React">
                        <div className="card">
                            <img className="card-logo" src={reactlogo}/>
                            <h1 className="no-wrap-ellipsis">React</h1>
                        </div>
                    </a>


                    <a href="/Jest">
                        <div className="card">
                            <img className="card-logo" src={jestlogo}/>
                            <h1 className="no-wrap-ellipsis">Jest testing</h1>
                        </div>
                    </a>


                    <a href="/NodeMySQL">
                        <div className="card">
                            <img className="card-logo" src={mysqllogo}/>
                            <h1 className="no-wrap-ellipsis">MySQL2 Parameterized SQL</h1>
                        </div>
                    </a>


                    <a href="/MySQL">
                        <div className="card">
                            <img className="card-logo" src={mysqllogo}/>
                            <h1 className="no-wrap-ellipsis">MySQL</h1>
                        </div>
                    </a>
                </div>
            </>
        );
    }
}

export default ExamplesPage;