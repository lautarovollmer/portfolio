import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Protocol Moon"
              description="Develop a group project, using agile methodology:
              Development of an application where the user can buy and
              sell art, being an artist or not, the user can also donate to
              artists to support their content. Frontend: React.js,
              Reduxtoolkit, Css, Html, Javascript Backend: MongoDB,
              Typescript, Express, FireBase External technologies: Socket.io
              "
              ghLink="https://github.com/ezmohorcic/PF-Project-Moon.git"
              demoLink="https://project-moon.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pokemon App"
              description="Development of a single page application (SPA) with the use
              of the following technologies: Frontend: React.js, Redux, Css,
              Html. Backend: Node.js, Express.js, Sequelize, PostgreSQL.
              Main features of the project: Filtering and classification of
              pokemons. Pokemon search. Create pokemons with main
              characteristics for example life, attack, defense, etc.
              "
              ghLink="https://github.com/lautarovollmer/PI-POKEMON.git"
              demoLink="https://pi-pokemon-teal.vercel.app/home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
