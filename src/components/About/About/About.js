import {
    faFacebookSquare,
    faGithubSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import myPic from "../../../images/profile.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


import "./About.css";

const About = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="container">
            <div className="row mt-5 pt-5 ms-3">
                <div className="col-md-6 about-me">
                    <img src={myPic} alt="" />
                    <div className="mt-5">
                        <h3 className="text-white">
                            <span className="title-color">I'm</span> Faruk Ahmed
                        </h3>
                        <p className="text-white">
                            Hi, I Am Faruk Ahmed.
                            I Have 2 years experience in Web Developing.
                            Love to work, like to use my creativity, want to make my clients very happy.
                        </p>
                        <p className="text-white">
                            This my passion I am an experience Web Development and my core skills are: HTML5, CSS3, BOOTSTRAP5, JAVASCRIPT, ES6, REACT JS, NODE JS, MONGODB, EXPRESS JS, REACT BOOTSTRAP, TYPESCRIPT And Python.
                            But I can do all kind of Front - End Design Or Web Developing related jobs.
                        </p>
                    </div>
                    <div className="mt-5 mb-5">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/faruk-ahmed-dev/">
                            <FontAwesomeIcon
                                className="icon liColor about-social-icon"
                                icon={faLinkedin}
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Faruk-Ahmed12"
                        >
                            <FontAwesomeIcon
                                className="icon gitColor about-social-icon"
                                icon={faGithubSquare}
                            />
                        </a>
                        <Link to="/contact">
                            <FontAwesomeIcon
                                className="icon enveColor about-social-icon"
                                icon={faEnvelopeSquare}
                            />
                        </Link>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/ODVUT.FARUK/">
                            <FontAwesomeIcon
                                className="icon fbColor about-social-icon"
                                icon={faFacebookSquare}
                            />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        
                        <h3 className="skills text-white">Technical Skills</h3>
                        <div className="technology">
                            <span>Html5</span>
                            <span>Css3</span>
                            <span>React Js</span>
                            <span>Node Js</span>
                            <span>Bootstrap5</span>
                            <span>Material UI</span>
                            <span>JavaScript</span>
                            <span>Express Js</span>
                            <span>MongoDB</span>
                            <span>ES6</span>
                            <span>Firebase</span>
                            <span>Netlify</span>
                            <span>Heroku</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="skills text-white">Familiar With</h3>
                        <div className="technology">
                            <span>Redux Js</span>
                            <span>Sass</span>
                            <span>React Native</span>
                            <span>Tailwind Css</span>
                            <span>Next Js</span>
                            <span>TypeScript</span>
                            
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <h3 className="skills text-white">Tools</h3>
                        <div className="technology">
                            <span>Vs Code</span>
                            <span>NodePad++</span>
                            <span>Brackets</span>
                            <span>Adobe Illustrator</span>
                            <span>Adobe PhotoShop</span>
                            <span>Ms Word</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </section>
    );
};

export default About;
