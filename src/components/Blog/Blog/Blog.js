import React from 'react';
import './Blog.css';
import b3 from '../../../images/blog/blog (1).jpg';
import b2 from '../../../images/blog/blog (2).jpg';
import b1 from '../../../images/blog/blog (3).jpg';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Blog = () => {
    return (
        <article>
            <Navbar></Navbar>
            <section className="mh-blog pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3  data-aos="fade-right" data-aos-duration="500">My Blogs</h3>
                        </div>
                        <br /> <br/> <br/>
                        <div className="col-md-4" data-aos="flip-left" data-aos-duration="1000">
                            <div className="mh-blog-item dark-bg">
                                <img src={b3} alt="" className="img-fluid rounded" />
                                <div className="blog-inner">
                                    <h5 className='pt-2 '>JavaScript ES6: Map</h5>
                                    <div className="mh-blog-post-info pt-1">
                                        <div>
                                            <p>Post on <a href="">05.05.2021</a></p>
                                            <p>By <a href="">Faruk Ahmed</a></p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sequi maiores debitis
                                illo accusamus reprehenderit, officia error quaerat iusto facilis.</p>
                                    <a href="https://webfaruk.medium.com/javascript-es6-map-a6c920eefa73">Read more</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4" data-aos="flip-left" data-aos-duration="1000">
                            <div className="mh-blog-item dark-bg">
                                <img src={b2} alt="" className="img-fluid rounded" />
                                <div className="blog-inner">
                                    <h5 className='pt-2'>Es6 filter map</h5>
                                    <div className="mh-blog-post-info pt-1">
                                        <div>
                                            <p>Post on <a href="">05.05.2021</a></p>
                                            <p>By <a href="">Faruk Ahmed</a></p>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sequi maiores debitis
                                illo accusamus reprehenderit, officia error quaerat iusto facilis.</p>
                                    <a href="https://webfaruk.medium.com/es6-filter-map-a7e1b0e45cb4">Read more</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4" data-aos="flip-left" data-aos-duration="1000">
                            <div className="mh-blog-item dark-bg">
                                <img src={b1} alt="" className="img-fluid rounded" />
                                <div className="blog-inner">
                                    <h5 className='pt-2 '>JavaScript number</h5>
                                    <div className="mh-blog-post-info pt-1">
                                        <div>
                                            <p>Post on <a href="">05.05.2021</a></p>
                                            <p>By <a href="">Faruk Ahmed</a></p>
                                        </div>
                                    </div>
                                    <p>The JavaScript Global function can be used on all JavaScript data types. When dealing with numbers, these are the most relevant methods</p>
                                    <a href="https://webfaruk.medium.com/javascript-number-system-621e8ed6435d">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </article>
    );
};

export default Blog;