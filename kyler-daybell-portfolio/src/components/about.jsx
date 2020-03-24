import React, { Component } from 'react';
import logo from '../public/images/logo.png';
import group from '../public/images/Group.jpg';
import '../public/css/aboutpage.css'


class AboutPage extends Component {
    render() {
        return (
            <>
                <div className="section1 header">
                    <h1 className="header">Hi I'm <span className="green">Kyler Daybell</span>.</h1>
                    <div className="roboto-text-thin header-padding">
                        <p className="roboto-text-thin header-padding">
                            I love working with <span className="green">code</span> and building amazing new things.
                        </p>
                        <p className="roboto-text-thin header-padding">
                            I am a <span className="green">full stack developer</span> with an emphasis on <span className="green">back
                                end</span> and <span className="green">API's.</span>
                        </p>
                        <p className="roboto-text-thin header-padding">
                            Most of my experience has been with <span className="green">Node.js</span> and <span
                                className="green">JavaScript.</span>
                        </p>
                        <p className="roboto-text-thin header-padding">
                            <span className="green">Database design</span> and <span className="green">Database queries</span> are my
                            favorite things to work with.
                        </p>
                    </div>
                </div>

                <div className="section2 image-header1">
                    <div className="skills">
                        <h1 className="header header-text1">Skills</h1>
                        
                        <div className="skillname skill1name">
                            <h3>Node.js</h3>
                        </div>
                        <div className="skillstars skill1stars">
                            <h3> 
                                &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                        </div>
                        <div className="skillname skill2name">
                            <h3>Express</h3>
                        </div>
                        <div className="skillstars skill2stars">
                            <h3>&#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                        </div>
                        
                        <div className="skillname skill3name">
                            <h3>HTML/CSS</h3>
                        </div>
                        <div className="skillstars skill3stars">
                            <h3>&#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                        </div>
                        <div className="skillname skill4name">
                            <h3>SQL / Database Design</h3>
                        </div>
                        <div className="skillstars skill4stars">
                            <h3>&#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                        </div>
                       
                        <div className="skillname skill5name">
                            <h3>Version control (Git)</h3>
                        </div>
                        <div className="skillstars skill5stars">
                            <h3>&#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                        </div>
                        <div className="skillname skill6name">
                            <h3>Jest Testing framework</h3>
                        </div>
                        <div className="skillstars skill6stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        
                        <div className="skillname skill7name">
                            <h3>Electron</h3>
                        </div>
                        <div className="skillstars skill7stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        <div className="skillname skill8name">
                            <h3>Server Administration</h3>
                        </div>
                        <div className="skillstars skill8stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        
                        <div className="skillname skill7name">
                            <h3>PHP</h3>
                        </div>
                        <div className="skillstars skill7stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        <div className="skillname skill8name">
                            <h3>linux</h3>
                        </div>
                        <div className="skillstars skill8stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        
                        <div className="skillname skill7name">
                            <h3>React</h3>
                        </div>
                        <div className="skillstars skill7stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                        <div className="skillname skill8name">
                            <h3>Agile</h3>
                        </div>
                        <div className="skillstars skill8stars">
                            <h3>&#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                        </div>
                    </div>
                </div>

                <div className="section3 image-header2">
                    <div className="work-experience ">
                        <h1 className="header ">Work Experience</h1>
                        <div className="work-experience header-padding ">
                            <h2 className="green ">Software Engineer and I.T. Administrator</h2>
                            <h3 className="">@ Dynamic Integrations</h3>
                            <p className="small-text green ">
                                June 2019 - Current
                            </p>
                            <p className="small-text ">
                                &#8226; Administering I.T. for 20+ small businesses.<br/>
                                &#8226; Working with legacy code to make systems robust and testable.<br/>
                                &#8226; Providing technical support to customers
                            </p>
                            <h2 className="green ">Computer Science Tutor</h2>
                                <h3 className="">@ Snow College Computer Science Department</h3>
                                <p className="small-text green ">
                                    June 2019 - Current
                                </p>
                                <p className="small-text ">
                                    &#8226; Assisting students during lab time and grading homework.<br/>
                                    &#8226; Helping students understand the fundamental constructs of programming.
                                </p>
                                <h2 className="green "> Captain, Training Officer</h2>
                                <h3 className="">@ Fountain Green Fire Department</h3>
                                <p className="small-text green ">
                                    Volunteer August 2016 - Current
                                </p>
                                <p className="small-text ">
                                    &#8226; Training Volunteer firefighters to reach professional standards.<br/>
                                    &#8226; Protecting community's from fires and other natural disasters.
                                </p>
                        </div>
                    </div>
                </div>

                <div className="section4 image-header4">
                    <div className="education ">
                        <h1 className="header ">Education</h1>
                        <div className="work-experience header-padding ">
                            <h2 className="green ">B.S. Software Engineering</h2>
                            <h3 className="">Snow College</h3>
                            <p className="small-text green ">
                                Emphasis in web development
                            </p>
                            <p className="small-text green ">
                                August 2018 - May 2020
                            </p>
                            <h2 className="green ">Associates of Pre-Engineering</h2>
                            <h3 className="">Snow College </h3>
                            <p className="small-text green ">
                                August 2015 - May 2018
                            </p>
                            <p className="small-text green ">
                                Emphasis in software engineering
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section5 image-header3">
                    <div className="image-header3-content">
                        <h1 className="header"><span className="green">Documents</span></h1>
                        <center>
                            <h1><a href="/PUBLIC/KylerDaybellResume.pdf" className="button" download>
                                    Resume download
                                </a></h1>
                        </center>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutPage;