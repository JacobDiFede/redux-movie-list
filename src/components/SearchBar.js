import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const SearchBar = ({ onSearch, setTitle }) => {
    const onFormSubmit = (e) => {
        onSearch();
        e.preventDefault();
    }

    return (
        <Container>
            <Form inline onSubmit={onFormSubmit}>
                <Row>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            id="movieTitle"
                            name="movieTitle"
                            placeholder="Search for a movie or show!"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <Button type="submit" className="SearchBarButton">Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SearchBar;