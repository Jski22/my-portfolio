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
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
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
                <h4>About Me</h4>
                <p>
                  Consequat velit elit ut dolor eiusmod ad minim qui. Consequat qui ex labore magna veniam proident anim eu ullamco culpa. Est ea anim ea irure nisi pariatur voluptate laboris ipsum do deserunt anim. Non et ullamco non et dolor.
                </p>
              </Card>
            </Col>
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
                Fugiat consectetur ut fugiat laborum ullamco laborum esse ut officia Lorem. Eiusmod esse est labore culpa voluptate non eu consequat eiusmod ipsum velit esse magna dolor. Aliquip non incididunt officia eu labore reprehenderit esse occaecat culpa amet.  
              </p>
              <a href="https://jski22.github.io/javascript-calculator/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
            </Col>
            <Col className="project-card">
              <div className="project-wrapper">
                <Image fluid src={pomoProject}></Image>
              </div>
              <h4 className="project-title">25 + 5 Clock</h4>
              <p className="project-description">
                In sunt veniam cillum ad consequat incididunt anim in deserunt. Qui occaecat esse laborum proident proident magna magna pariatur exercitation. Nulla anim nulla nostrud pariatur culpa officia ex. Nulla sit excepteur deserunt irure incididunt.
              </p>
              <a href="https://jski22.github.io/25--5-clock/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
            </Col>
            <Col className="project-card">
              <div className="project-wrapper">
                <Image fluid src={dmProject}></Image> 
              </div>
              <h4 className="project-title">Drum Machine</h4>
              <p className="project-description">
                Aute laboris laborum aliqua mollit in id quis. Aute duis laboris Lorem elit fugiat aliquip pariatur aliquip ex. Consequat ut consectetur veniam do velit cupidatat velit ipsum laboris anim consectetur elit in. Cillum voluptate enim dolor consequat exercitation consequat excepteur minim cillum officia dolore.
              </p>
              <a href="https://jski22.github.io/drum-machine/" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
            </Col>
          </Row>
        </Container>
      </body>
      <footer>
        <Container id="Contact">
          <h2 id="contact-header">Let's Work Together</h2>
            <FaLinkedin className="social-icon" />
            <FaGithubSquare className="social-icon" />
            <FaEnvelope className="social-icon" />
        </Container>
      </footer>
    </div>
  );
}

export default App;
