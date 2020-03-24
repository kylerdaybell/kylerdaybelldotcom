import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg';
import '../public/css/homepage.css'


class HomePage extends Component {
    render() {
        return (
            <>
            <div className="section1">
            <h1 className="header-text">
                <span className="green"> Code</span>
                is the coolest set of
                <span className="green">[LEGOS]</span>.
            </h1>
            </div>
                <div className="section2">
                <h1 className="header-text">
                    A beautiful tool that allows us to build
                    <span className="green">anything</span>
                    we can imagine.
                </h1>
            </div>
                <div className="section3 image-header1">
                    <div className="skills">
                        <h1 className="header-text1">My favorite <span className="green">bricks:</span></h1>
                        <div className="skill1name no-wrap">
                            <h3>Node.js</h3>
                        </div>
                        <div className="skill1bar">
                            <div className="percentbar90"></div>
                        </div>
                        <div className="skill1percentage ">
                            <h3>90%</h3>
                        </div>
                        <div className="skill2name no-wrap">
                            <h3>Express</h3>
                        </div>
                        <div className="skill2bar">
                            <div className="percentbar80"></div>
                        </div>
                        <div className="skill2percentage">
                            <h3>80%</h3>
                        </div>
                        <div className="skill3name no-wrap">
                            <h3>Database Design</h3>
                        </div>
                        <div className="skill3bar">
                            <div className="percentbar80"></div>
                        </div>
                        <div className="skill3percentage">
                            <h3>80%</h3>
                        </div>
                        <div className="skill4name no-wrap">
                            <h3>HTML/CSS</h3>
                        </div>
                        <div className="skill4bar">
                            <div className="percentbar80"></div>
                        </div>
                        <div className="skill4percentage">
                            <h3>80%</h3>
                        </div>
                        <div className="skill5name no-wrap">
                            <h3>Git</h3>
                        </div>
                        <div className="skill5bar">
                            <div className="percentbar80"></div>
                        </div>
                        <div className="skill5percentage">
                            <h3>80%</h3>
                        </div>
                        <div className="skill6name no-wrap">
                            <h3>MySQL</h3>
                        </div>
                        <div className="skill6bar">
                            <div className="percentbar60"></div>
                        </div>
                        <div className="skill6percentage">
                            <h3>60%</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default HomePage;