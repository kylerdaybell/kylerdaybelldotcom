import React, { Component } from 'react';
import '../public/css/projectspage.css'
import building2 from '../public/images/Buildingnumber2.jpg'


class ProjectsPage extends Component {
    render() {
        return (
            <>
                <div className="top header-text header">
                    <img className="header-image" src={building2}/>
                        <div className="titleheader">
                            <h1><span className=" green header thick">Projects</span></h1>
                        </div>
                </div>

                <div className="project-holder1">
                    <div className="project">
                        <div>
                            <h1><span className="green  thick ">Project GreenBean</span></h1>
                        </div>
                        <div>
                            <h2 className="green ">Project description:</h2>
                            <h4>
                                The goal of the project was to create a desktop application that could be installed on desktop computers that would allow
                                users to create recipes and search for them based on ingredients they had at home.
                            </h4>
                        </div>
                        <div>
                            <h3><span className="green">Project Duration:</span>3  months</h3>
                        </div>
                        <div>
                            <h2 className="green">contributors:</h2>
                            <h3><span className="green">Kyler Daybell</span> - database architect and backend API developer</h3>
                            <h3><span className="green">Brandon Isbell</span> - Front end API interaction systems architect</h3>
                            <h3><span className="green">Mike Vance</span> - Front end and design architect</h3>

                        </div>
                        <div>
                            <h2 className="green">Technology stack:</h2>
                            <h3><span className="green">API: </span>RESTful, Node.js, Express, Jest, MySQL, HTTPS, LetsEncrypt , GitHub build Pipelines </h3>
                            <h3><span className="green">Desktop Application:</span> React, Redux, Electron, Jest, HTML, CSS</h3>

                        </div>
                        <div>
                            <h2 className="green">Outcomes:</h2>
                            <h4>
                                This project was largely successful, our team was able to deliver a fully working, tested, and user friendly
                                Our project was delivered on time. Our team was able to deliver an application that had lot of potential for easy
                                growth based off of it api based nature. Due to the UX based front end focus our user experience was very good.
                            </h4>

                        </div>
                        <div>
                            <h2 className="green">Lessons Learned:</h2>
                            <h4>
                                I learned a lot about making architecture decisions, The api based architecture and quality documentation means
                                that the business logic of this application can be easily deployed and reused in other application formats such as web and mobile.
                                Building the api in a MVC architecture with dependency injection made it really easy to change and add new features.
                                I also learned a ton about the value of teamwork, proper task delegation, and reaching out to others for help.
                            </h4>
                            <a href='https://github.com/kylerdaybell/Project_GreenBean' className="button-green">View on GitHub</a>
                        </div>
                    </div>
                </div>



                <div className="project-holder2">
                    <div className="project">
                        <div>
                            <h1><span className="green  thick ">Sahara Schedule</span></h1>
                        </div>
                        <div>
                            <h2 className="green ">Project description:</h2>
                            <h4>
                                the goal was to create a school scheduling app that was more tailored to students.
                            </h4>
                        </div>
                        <div>
                            <h3><span className="green">Project Duration:</span> 2 months</h3>
                        </div>
                        <div>
                            <h2 className="green">contributors:</h2>
                            <h3><span className="green">Kyler Daybell</span> - Solo fullstack developer</h3>

                        </div>
                        <div>
                            <h2 className="green">Technology stack:</h2>
                            <h3><span className="green">Website: </span> Node.js, Express, EJS, Jest, MySQL, MVC</h3>
                        </div>
                        <div>
                            <h2 className="green">Outcomes:</h2>
                            <h4>
                                This project was not completed due to other projects but the stack and integration of the stack was successful.
                                The project was also a great learning experience.
                            </h4>

                        </div>
                        <div>
                            <h2 className="green">Lessons Learned:</h2>
                            <h4>
                                This was my first attempt at a MVC structured application using Node.js and express.
                                This was my first time using TDD or any kind of automated testing within javascript.
                                I learned the value of TDD and automated testing within javascript when I was refactoring code.
                                I learned one way to inject dependency's into services to alow for testing and mocking other services.
                                I learned a lot about MVC structure EJS as a
                                templating framework to present users with
                                clean and consistent views.
                            </h4>

                        </div>
                        <a href='https://github.com/kylerdaybell/project_Sahara' className="button-green">View on GitHub</a>
                    </div>
                </div>

                <div className="project-holder1">
                    <div className="project">
                        <div>
                            <h1><span className="green header">Project WhiteShirt</span></h1>
                        </div>
                        <div>
                            <h2 className="green">Project description:</h2>
                            <h4>
                                To create a video sharing platform with user accounts, custom generated views, and viewing history.
                            </h4>
                        </div>
                        <div>
                            <h3><span className="green">Project Duration:</span> 6 months</h3>
                        </div>
                        <div>
                            <h2 className="green">contributors:</h2>
                            <h3><span className="green">Kyler Daybell</span> - fullstack developer</h3>
                            <h3><span className="green">Mike Vance</span> - Front end and design</h3>
                        </div>
                        <div>
                            <h2 className="green">Technology stack:</h2>
                            <h3><span className="green">Website: </span> Node.js, Express, MySQL, NodeMailer</h3>
                        </div>
                        <div>
                            <h2 className="green">Outcomes:</h2>
                            <h4>
                                This project was completed but was largely a failure due to inexperience in architecture with web applications.
                                The final code was insecure and extremely hard to change. the project was monolithic with html being
                                rendering in the same function as the database calls. The project did have some added features such as email validation via email.
                                file and video storage with database links. password hashing before storage.
                            </h4>

                        </div>
                        <div>
                            <h2 className="green">Lessons Learned:</h2>
                            <h4>
                                This was my first attempt at writing server side code. in doing so, I spent a lot of the time
                                learning about the first way I could find to do things instead of doing them the right way.
                                However in doing this I learned a lot about the wrong way of doing things and because
                                I understood how frustrating doing things the wrong way can be I was very impressed when I later learned
                                about MVC structuring.
                                Due to the security issues the project was removed from github.
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProjectsPage;