import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "bootstrap/dist/css/bootstrap.min.css";

import burj from "../../Assets/Projects/burj.png";
import shop from "../../Assets/Projects/shop.png";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import country from "../../Assets/Projects/country.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";
import doctors from "../../Assets/app.jpg";
import hashtech from "../../Assets/hashtech.jpg";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hashtech}
              isBlog={false}
              title="Hastech IT Solution BD"
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ipsa."
              link="https://github.com/marufpbt/hashtech-client"
              live="https://hashtechitsolutionbd.web.app/"
            />

          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctors}
              isBlog={false}
              title="Doctor's Portal"
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ipsa."
              link="https://github.com/marufpbt/doctors-portal-client"
              live="https://doctors-portal-marufpbt.web.app/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burj}
              isBlog={false}
              title="Burj Al Arab"
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ipsa."
              link="https://github.com/marufpbt/burj-al-arab"
              live="https://burj-al-arab-59182.web.app/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Panda Ecommerce"
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ipsa."
              link="https://github.com/marufpbt/shopping-cart"
              live="https://marufpbt.github.io/panda-ecommerce-bootstrap/"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={editor}
              link="https://www.gitbook.com/"
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
