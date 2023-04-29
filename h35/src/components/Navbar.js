import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">CS464P</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/houses">Houses</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      )
  }