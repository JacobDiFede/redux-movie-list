import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovieList, removeMovieFromList } from './redux/actions/movieList.actions';
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

let App = ({ movieList, getMovieList, removeMovieFromList  }) => {
  useEffect(() => {
    getMovieList();
  }, [getMovieList])

  return (
    <StyledContainer className="bg-dark">
      <h1>My Movie List</h1>
        <Row>
        {
          movieList && movieList.list && movieList.list.map((movie) => (
            <Col xs={12} md={6} lg={3} key={movie.imdbID}>
              <Card bg="dark" border="light" text="light">
                <Card.Img variant="top" src={movie.Poster} alt={`${movie.Title} poster`} />
                <Card.Body>
                  <Card.Title>{ movie.Title }</Card.Title>
                  <Button variant="primary" onClick={() => removeMovieFromList(movie)}>Remove From List</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Row>
    </StyledContainer>
  );
}

const mapStateToProps = state => ({
  movieList: state.movieListReducer,
});

App = connect(
  mapStateToProps,
  { getMovieList, removeMovieFromList }
)(App)

export default App;
