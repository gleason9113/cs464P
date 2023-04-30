import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function NavBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <Link className="navbar-brand" to="/">CS464P</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                   <Nav.Item>
                        <Link className="nav-link" to="/search">Search</Link>
                   </Nav.Item>
                   <Nav.Item>
                        <Link className="nav-link" to="/houses">Houses</Link>
                   </Nav.Item>     
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      )
  }