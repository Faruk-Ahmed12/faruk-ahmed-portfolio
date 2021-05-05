import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright mt-3">
          <span className="text-light">Designed and Developed by Faruk Ahmed</span>
        </Col>
        <Col md="4" className="footer-copywright mt-3">
        <span className="text-light"><p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p></span>
        </Col>
        <Col md="4" className="footer-body ">
          <ul className ="footer-icons d-flex" >
            <li className="social-icons">
              <a
                href="https://github.com/Faruk-Ahmed12"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/faruk-ahmed-dev/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
