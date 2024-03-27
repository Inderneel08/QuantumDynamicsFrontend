import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function TitleBar()
{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">ChatRoom</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                    <Nav.Link as={Link} to="register">Register</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}



export default TitleBar;