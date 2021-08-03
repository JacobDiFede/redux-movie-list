import { useState, useEffect } from "react";
import MovieApiService from "../services/movieApi.service";

export const MovieDetails = ({ id }) => {
    const [movie, setMovie] = useState();

    const movieService = new MovieApiService();

    useEffect(() => {
        getMovieById(id);
    }, [id])

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);

        setMovie(movie);
    }

    return movie
        ? (
        <div>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <div>
                <div>
                    <h2>{movie.Title}</h2>
                    <span>
                        { movie.imdbRating }
                    </span>
                </div>
                <div>
                    <span>
                        { movie.Rated }
                    </span>
                    <span>
                        { movie.Runtime }
                    </span>
                    <span>
                        { movie.Genre }
                    </span>
                </div>
                <div>
                    <h4>Plot</h4>
                    { movie.Plot }
                </div>
                <div>
                    <h4>Actors</h4>
                    { movie.Actors }
                </div>
            </div>
        </div>
        )
        : (
            <h2>Loading...</h2>
        );
}