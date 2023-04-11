import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home" className="ms-4">Justen Schilinski</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="pe-4">About</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Skills</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Projects</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <body>
        <Container id="About">
          <Row>
            <Col lg={8}>
              <Container id="profile-picture" className="align-self-center"></Container>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
