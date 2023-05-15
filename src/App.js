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
import dmProject from "./assets/DM SS 2.png";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
          <Navbar.Brand href="#home" className="ms-4">Justen Schilinski</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#About" className="pe-4">About</Nav.Link>
            <Nav.Link href="#Skills" className="pe-4">Skills</Nav.Link>
            <Nav.Link href="#Projects" className="pe-4">Projects</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <body>
        <Container id="About" className="d-flex">
          <Row className="flex-fill">
            <Col lg={7} className="d-flex align-items-center">
              <Container id="profile-picture">
                <Image fluid className="rounded-5 border-info" src={profilePic}></Image>
              </Container>
            </Col>
            <Col className="d-flex align-items-center">
              <Card>
                <h4 id="introduction">Hi, my name is Justen</h4>
                <p>
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
            <p>I'm web developer near Pittsburgh, PA. It has always been a passion of mine to be able to create things and doing it on the web seems like a perfect fit.</p>
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
          <Row id="project-row" className="d-flex justify-content-center">
            <Col className="project-card">
              <div className="project-wrapper">
                <Image fluid src={jsProject}></Image>
              </div>
              <h4 className="project-title">JavaScript Calculator</h4>
              <p className="project-description">
                Fully functional calculator built with mainly with JavaScript and Bootstrap. Made as an academic project to meet certain specifications. 
              </p>
              <a href="https://jski22.github.io/javascript-calculator/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
            </Col>
            <Col className="project-card">
              <div className="project-wrapper">
                <Image fluid src={pomoProject}></Image>
              </div>
              <h4 className="project-title">25 + 5 Clock</h4>
              <p className="project-description">
                A timer you can use to study for a set number of minutes, preset to 25. When the time runs out it will switch over to the break time number of minutes, the default is preset to 5. Built as a academic studies application. 
              </p>
              <a href="https://jski22.github.io/25--5-clock/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
            </Col>
            <Col className="project-card">
              <div className="project-wrapper">
                <Image fluid src={dmProject}></Image> 
              </div>
              <h4 className="project-title">Drum Machine</h4>
              <p className="project-description">
                Another project made for academic studies. Funtions as a drum pad that when a specific pad is clicked on it will play a pre-recorded sound and display the title of that sound. The sound can also be triggered by pressing the associated key from your keyboard. 
              </p>
              <a href="https://jski22.github.io/drum-machine/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
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
