import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home" className="ms-4">React-Bootstrap</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="pe-4">About Me</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Skills</Nav.Link>
            <Nav.Link href="#home" className="pe-4">Projects</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
