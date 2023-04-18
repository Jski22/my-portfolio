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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home" className="ms-4">Justen Schilinski</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="pe-4">About</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Skills</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Projects</Nav.Link>
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
        <Container id="Skills">
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
          <h2 id="projects-header">My Recent Projects</h2>
          <Row></Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
