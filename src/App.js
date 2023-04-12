import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import profilePic from "./assets/Headshot 4:12.png"
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
              <Card>Consequat velit elit ut dolor eiusmod ad minim qui. Consequat qui ex labore magna veniam proident anim eu ullamco culpa. Est ea anim ea irure nisi pariatur voluptate laboris ipsum do deserunt anim. Non et ullamco non et dolor.</Card>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
