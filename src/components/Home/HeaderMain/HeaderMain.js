import React from 'react';
import profile from '../../../images/profile.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="headerMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 header-content">

                    <div style={
                        {
                            height: '400px'
                        }       } className="row d-flex align-items-center">
                <div className="">
                    <p style={
                        {
                            color: '#01D85F'
                        }
                    }> Hello, I 'm <span className="wave">👋🏻</span></p>
                    <h1 style={{color: '#ffffff'}}>Faruk Ahmed</h1>
                    <p className="description">I Have 2 years experience in Web Developing.Love to work, like to use my creativity, want to make my clients very happy.<br/>
                    <br/>This my passion I am an experienced Web Development and my core skills are Html, CSS, JavaScript, Bootstrap5, Node Js, and React Js.</p>

                    <div className="container-left-social-link-side" data-aos="fade-right">
                    <a className="social-btn social-git" href="https://github.com/rahat9016" target="_blank"><i class="fab fa-github"></i></a>
                    <a className="social-btn social-li" href="https://www.linkedin.com/in/minhajur-rohoman/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
                     <a className="social-btn" href="https://www.facebook.com/minhajurrohomanrahat90/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>

                    <div className="headerMainBtn">
                    <a download target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1xEBrCOPPf0c0PTl7nHzBsUCwJ29L5ckx" class="text-white"><button type="button" class="btn aboutBtn"> Cover Letter</button></a>

                    <a href="/about"><button type="button" class="btn aboutBtn">Get in touch</button></a>
                    </div>
                </div>

            </div>

            </div>

                    <div className="col-md-6">
                    <div className="mt-5 pt-4">
                    <img style={{height: '300px', width: '300px', float: 'right'}} src={profile} alt="" className="img-fluid headerImg"/>
                </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;