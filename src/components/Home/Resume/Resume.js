import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "./Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2>My Resume</h2>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Developer"
              date="July 2019 - Present"
              content={[
                "React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Stripe.js",
                "HTML5, CSS3, Bootstrap4, WordPress"
              ]}
            />
            <h3 className="resume-title">Programming Knowledge</h3>

            <Resumecontent
              title=""
              content={[
                "      Expertise:  React Bootstrap, JavaScript, REST API, ES6, React.js, Bootstrap4, HTML5, CSS3, WordPress ",
                 "        Tools :  Git, Webpack, Create React App, NPM, VS Code,  Chrome Dev  tool, FirebaseNetlify, Heroku ",
                "       Familiar :  Redux.js, GraphQL, TypeScript, Laravel, jQuery, AJAX  ",
                "      Comfortable : Material UI,Node.js, Express.js,  MongoDB, JSON, SASS ",

              ]}
            />
          </Col>
          
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Chapai Nawabganj City College "
              date="2020 - H.S.C"
              content={[`GPA: 4.75`]}
            />
            <Resumecontent
              title="My Next Degree Comming Soon.."
              date="2021 - 2021"
              content={["Comming Soon.."]}
            />
            <Resumecontent
              title="Chapai Nawabganj District, Rajshahi, Bangladesh"
              date="2001 - Present"
              content={["My Home Town"]}
            />

          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary"
          href="https://drive.google.com/uc?export=download&id=1bfsPFq__2NaEkPdo9CupQRl4KzzlZiA_"
          target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
