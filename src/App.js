import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import profilePic from "./assets/Headshot 4:12.png";
import htmlLogo from "./assets/icons8-html-5.svg";
import cssLogo from "./assets/icons8-css3.svg";
import jsLogo from "./assets/icons8-javascript.svg";
import bootstrapLogo from "./assets/icons8-bootstrap.svg";
import reactLogo from "./assets/icons8-react-native.svg";
import gitLogo from "./assets/icons8-git.svg";
import jsProject from "./assets/JS Calculator SS 2.png";
import pomoProject from "./assets/25+5 Clock SS 2.png";
import gdpProject from "./assets/GDP Barchart SS2.png";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" fixed="top">
          <Navbar.Brand href="#home" className="ms-4">Justen Schilinski</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About" className="pe-4" id="about-link">About</Nav.Link>
              <Nav.Link href="#Skills" className="pe-4">Skills</Nav.Link>
              <Nav.Link href="#Projects" className="pe-4">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <body>
        <Container id="About" className="d-flex">
          <Row className="flex-fill" id="about-row">
            <Col lg={7} md={6} sm={5} className="d-flex align-items-center mx-auto col-6" id="pic-column" >
              <Container id="profile-picture">
                <Image fluid className="rounded-5 border-info" src={profilePic}></Image>
              </Container>
            </Col>
            <Col className="d-flex align-items-center" id="intro-column">
              <Card id="intro-card">
                <h4 id="introduction">Hi, my name is Justen</h4>
                <p id="intro-line">
                  I'm a web developer, building useful applications on the internet
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container id="About-me">
          <Row id="about-me-header-row" className="text-center">
            <h2 id="about-me-header">About me</h2>
          </Row>
          <Row id="about-me-section" className="text-center">
            <p>
              I'm located near Pittsburgh, PA and I have a passion to create, fix, and improve things. When I was a younger, it was always fun to see what I could make or how I could take something apart and fix it. In the last year or so I've learned to use several different programming tools, built many web applications, and I'm always interested to see what else I can learn. I look forward to working hard on new projects to bring great ideas to life.
            </p>
          </Row>
        </Container>
        <Container id="Skills" className="align-items-center">
          <Row id="skill-header-row" className="text-center">
            <h2 id="skills-header">My Top Skills</h2>
          </Row>
          <Row id="first-logo-set" className="d-flex justify-content-center">
            <Image src={htmlLogo} className="icon icon-card"></Image>
            <Image src={cssLogo} className="icon icon-card"></Image>
            <Image src={jsLogo} className="icon icon-card"></Image>
          </Row> 
          <Row id="second-logo-set" className="d-flex justify-content-center">
            <Image src={bootstrapLogo} className="icon icon-card"></Image>
            <Image src={reactLogo} className="icon icon-card"></Image>
            <Image src={gitLogo} className="icon icon-card"></Image>
          </Row> 
        </Container>
        <Container id="Projects">
          <Row id="project-header-row" className="text-center">
            <h2 id="projects-header">My Recent Projects</h2>
          </Row>
          <Row xs="auto" xl={3} id="project-row" className="d-flex justify-content-center">
            <Col id="project-1">
              <Card className="project-card">
                <div className="project-wrapper">
                  <Image fluid src={jsProject}></Image>
                </div>
                <h4 className="project-title">JavaScript Calculator</h4>
                <p className="project-description">
                  Fully functional calculator built with mainly with JavaScript and Bootstrap. Made as an academic project to meet certain specifications. Can perform all operations and does not allow multiple decimal points.
                </p>
                <a href="https://jski22.github.io/javascript-calculator/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
              </Card>
            </Col>
            <Col id="project-2">
              <Card className="project-card">
                <div className="project-wrapper">
                  <Image fluid src={pomoProject}></Image>
                </div>
                <h4 className="project-title">25 + 5 Clock</h4>
                <p className="project-description">
                  A timer you can use to study for a set number of minutes, preset to 25. When the time runs out it will switch over to the break time number of minutes, the default is preset to 5. Built as a academic studies application. 
                </p>
                <a href="https://jski22.github.io/25--5-clock/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
              </Card>
            </Col>
            <Col id="project-3">
              <Card className="project-card">
                <div className="project-wrapper">
                  <Image fluid src={gdpProject}></Image> 
                </div>
                <h4 className="project-title">US GDP Barchart</h4>
                <p className="project-description">
                  Simple data visualizaiton barchart project. Uses data from an api source and then displays the GDP for the US for that given year. When hovering over a specific data point, the current bar will be highlighted and show the month and year in which it occurred. 
                </p>
                <a href="https://jski22.github.io/gdp-barchart/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
              </Card>
            </Col>
          </Row>
        </Container>
      </body>
      <footer>
        <Container id="Contact" className="text-center">
          <h2 id="contact-header">Let's Work Together</h2>
            <a href="https://www.linkedin.com/in/justen-schilinski-03700b125"
            target="_blank"
            rel="noreferrer">
              <FaLinkedin className="social-icon" /> 
            </a>
            <a href="https://github.com/Jski22"
            target="_blank"
            rel="noreferrer">
              <FaGithubSquare className="social-icon" />
            </a>
            <a href="mailto:justenschilinski34@hotmail.com" >
              <FaEnvelope className="social-icon" />
            </a>
        </Container>
      </footer>
    </div>
  );
}

export default App;
