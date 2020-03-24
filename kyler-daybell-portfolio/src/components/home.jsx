import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg';
import '../public/css/homepage.css'


class Homepage extends Component {
    render() {
        return (
            <>
            <div class="section1">
            <h1 class="header-text">
                <span class="green"> Code</span>
                is the coolest set of
                <span class="green">[LEGOS]</span>.
            </h1>
            </div>
                <div class="section2">
                <h1 class="header-text">
                    A beautiful tool that allows us to build
                    <span class="green">anything</span>
                    we can imagine.
                </h1>
            </div>
                <div class="section3 image-header1">
                    <div class="skills">
                        <h1 class="header-text1">My favorite <span class="green">bricks:</span></h1>
                        <div class="skill1name no-wrap">
                            <h3>Node.js</h3>
                        </div>
                        <div class="skill1bar">
                            <div class="percentbar90"></div>
                        </div>
                        <div class="skill1percentage ">
                            <h3>90%</h3>
                        </div>
                        <div class="skill2name no-wrap">
                            <h3>Express</h3>
                        </div>
                        <div class="skill2bar">
                            <div class="percentbar80"></div>
                        </div>
                        <div class="skill2percentage">
                            <h3>80%</h3>
                        </div>
                        <div class="skill3name no-wrap">
                            <h3>Database Design</h3>
                        </div>
                        <div class="skill3bar">
                            <div class="percentbar80"></div>
                        </div>
                        <div class="skill3percentage">
                            <h3>80%</h3>
                        </div>
                        <div class="skill4name no-wrap">
                            <h3>HTML/CSS</h3>
                        </div>
                        <div class="skill4bar">
                            <div class="percentbar80"></div>
                        </div>
                        <div class="skill4percentage">
                            <h3>80%</h3>
                        </div>
                        <div class="skill5name no-wrap">
                            <h3>Git</h3>
                        </div>
                        <div class="skill5bar">
                            <div class="percentbar80"></div>
                        </div>
                        <div class="skill5percentage">
                            <h3>80%</h3>
                        </div>
                        <div class="skill6name no-wrap">
                            <h3>MySQL</h3>
                        </div>
                        <div class="skill6bar">
                            <div class="percentbar60"></div>
                        </div>
                        <div class="skill6percentage">
                            <h3>60%</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Homepage;