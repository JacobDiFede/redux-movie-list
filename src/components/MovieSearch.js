import { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieToList } from '../redux/actions/movieList.actions';
import MovieApiService from '../services/movieApi.service';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Styled from 'styled-components';

const StyledContainer = Styled(Container)` 
  min-height: 100vh;
  min-width: 100vw;
  `;

let MovieSearch = ({ addMovieToList }) => {
    const movieApiService = new MovieApiService();
    const [title, setTitle] = useState();

    const [searchResults, setSearchResults] = useState(); 
    const onSearch = async () => {
        const results = await movieApiService.getMoviesByTitle(title);
        console.log(title);
        setSearchResults(results.Search);
    }

    const addToMovieList = async (id) => {
        const result = await movieApiService.getMovieById(id);

        addMovieToList(result);
    }

    return (
        <StyledContainer className="bg-dark">
            <SearchBar onSearch={onSearch} setTitle={setTitle}/>
            <Row>
                {
                    searchResults && searchResults.map((movie) => (
                        <Col xs={12} md={6} lg={3} key={movie.imdbID}>
                            <Card bg="dark" border="light" text="light">
                                <Card.Img variant="top" src={movie.Poster} alt={`${movie.Title} poster`} />
                                <Card.Body>
                                    <Card.Title>{ movie.Title }</Card.Title>
                                    <Button variant="primary" onClick={() => addToMovieList(movie.imdbID)}>Add To List</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </StyledContainer>
    )
}

MovieSearch = connect(
    null,
    { addMovieToList }
)(MovieSearch)

export default MovieSearch;