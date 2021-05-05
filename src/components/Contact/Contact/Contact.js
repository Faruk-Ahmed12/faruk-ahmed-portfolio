import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            <section className="contact mt-4 py-3">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                        <div className="row">
                       <div className="col-md-6">
                           <div className="form-group">
                           <input type="text" className="form-control" placeholder="First Name"/>
                       </div>
                       </div>
                       <div className="col-md-6">
                           <div className="form-group">
                           <input type="text" className="form-control" placeholder="Last Name"/>
                       </div>
                       </div>
                   </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
       <Footer></Footer>
        </div>
        </div>
    );
};

export default Contact;