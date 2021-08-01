import RBNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <RBNavbar bg="dark" variant="dark">
            <Container>
                <RBNavbar.Brand href="/">Movie Database</RBNavbar.Brand>
                <RBNavbar.Toggle/>
                <RBNavbar.Collapse/>
                    <Nav>
                        <Nav.Link href="/redux-movie-list">Home</Nav.Link>
                        <Nav.Link href="/redux-movie-list/usermovielist">Movie List</Nav.Link>
                    </Nav>
            </Container>
        </RBNavbar>
    );
}

export default Navbar;