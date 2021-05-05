import React from 'react';
import './About.css';
import profile from '../../../images/about.JPG'
import { BsFillCaretRightFill } from "react-icons/bs";

const About = () => {
    return (
        <section className="pro-bg-primary" id="about">
            <div className="container py-5 text-white">
                <div className="text-center pb-5">
                    <h2 className="m-0 p-0 display-6 fw-bold">About Me</h2>
                    <span className="span-border"></span>
                </div>

                <div className="row gy-4">
                    <div className="col-md-4 text-center text-md-start">
                        <img className="img-fluid about-picture" style={{ width: '330px', background: '#fff' }} src={profile} alt="profile" />
                    </div>
                    <div className="col-md-8">
                        
                        <p className="about-dec">Hi, I Am Faruk Ahmed.
                        I Have 2 years experience in Web Developing.
                        Love to work, like to use my creativity, want to make my clients very happy.
                    </p>
                    <p className ="about-dec">
                        This my passion I am an experience Web Development and my core skills are : HTML5,CSS3,BOOTSTRAP5,JAVASCRIPT, ES6,REACT JS, NODE JS, MONGODB, EXPRESS JS, REACT BOOTSTRAP, TYPESCRIPT And Python.
                        But I can do all kind of Front-End Design Or Web Developing related jobs.
                    </p> 
                    <h3 className="">Basic info</h3>
                        <div className="line"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Date Of Birth: 27 November 2001</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Website: Comming Soon...</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Phone No: +88 01819223836</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Email: techwithfaruk@gmail.com</p>
                            </div>
                            <div className="col-md-6">
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Age: 19+</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Nationality: Bangladeshi</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Freelancer: available</p>
                                <p className="fs-5"><BsFillCaretRightFill className="pro-text-primary fw-bold fs-3" />Chapai Nawabganj, Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;