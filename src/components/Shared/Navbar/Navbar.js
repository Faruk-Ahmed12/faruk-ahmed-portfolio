import React from 'react';
import { Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../../images/logo1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/home"><img style={{width: '30px', height: '30px'}} src={logo} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Nav.Link className="nav-link mr-2 text-white" href="/home">Home</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link className="nav-link mr-2 text-white" href="/about">About</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link className="nav-link mr-2 text-white" href="/work">Works</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link className="nav-link mr-2 text-white" href="/blog">Blog</Nav.Link>
      </li>
      <li className="nav-item">
        <Nav.Link className="nav-link mr-2 text-white" href="/contact">Contact</Nav.Link>
      </li>
      <a download target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1bfsPFq__2NaEkPdo9CupQRl4KzzlZiA_" class="text-white"><button type="button" class="btn btn-sm btn-outline-success">Resume</button></a>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;