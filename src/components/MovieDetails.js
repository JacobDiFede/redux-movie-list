import { useState, useEffect } from "react";
import MovieApiService from "../services/movieApi.service";
import '../styles/modalStyles.css'

export const MovieDetails = ({ id }) => {
    const [movie, setMovie] = useState();

    const movieService = new MovieApiService();

    useEffect(() => {
        getMovieById(id);
    })

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
                    <span className="Rating">
                        { movie.imdbRating }
                    </span>
                </div>
                <div>
                    <span className="Rated">
                        { movie.Rated }
                    </span>
                    <span className="Runtime">
                        { movie.Runtime }
                    </span>
                    <span className="Genre">
                        { movie.Genre }
                    </span>
                </div>
                <div>
                    <h4 className="PlotHeader">Plot</h4>
                    <span className="Plot"> { movie.Plot } </span>
                </div>
                <div>
                    <h4 className="ActorsHeader">Actors</h4>
                    <span className="Actors"> { movie.Actors } </span>
                </div>
            </div>
        </div>
        )
        : (
            <h2>Loading...</h2>
        );
}