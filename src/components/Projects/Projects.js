import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sonoriq from "../../Assets/Projects/sonoriq.png";
import blockchain from "../../Assets/Projects/blockchain.png";

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
              imgPath={sonoriq}
              isBlog={false}
              title="Sonoriq"
              description="A music community web app with many added features build with react.js, Nodejs, and Firebase. Have features which allows user for realtime messaging, image sharing as well as group engagement. There is added features of music recommendations and customized playlist creation."
              ghLink="https://github.com/sagnik-004/Sonoriq.git"
              demoLink="https://sonoriq.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Blockchain Enabled Health Records Service"
              description="This platform will allow patients to connect their wallets, receive health records from hospitals, and grant or revoke access to doctors for a limited period."
              ghLink="https://github.com/Samanyu-coder/Blockchain-Enabled-Health-Records-Service.git"
              demoLink="https://blockchain-enabled-health-records-service.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
