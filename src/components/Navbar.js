import RBNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <RBNavbar bg="dark" variant="dark">
            <Container>
                <RBNavbar.Brand href="/">Movie Database</RBNavbar.Brand>
                <RBNavbar.Toggle/>
                <RBNavbar.Collapse/>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/usermovielist">Movie List</Nav.Link>
                    </Nav>
            </Container>
        </RBNavbar>
    );
}

export default Navbar;