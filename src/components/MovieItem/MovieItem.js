import React from 'react';

const MovieItem = (props) => {
	const movies = props.movies;
	return (
		<div className="movies-container">
            {movies.map(movie => {
            	const imgUrl = (movie.Poster && movie.Poster !== 'N/A') ? movie.Poster : "https://via.placeholder.com/300.png/09f/fff?text=No+Image+Available";
            	return(
              		<div key={movie.imdbID} className="movie-item">
		                <div className="movie-img-ctr">
		                  <img className="img-fluid img-thumbnail img-responsive" src={imgUrl} alt={movie.Title} />
		                </div>
		                <article className="movie-detail">
							<div className="movie-detail-left">Name: &nbsp;</div>
							<div className="movie-detail-right">{movie.Title}</div>
						</article>
		                <article className="movie-detail">
							<div className="movie-detail-left">Year: &nbsp;</div>
							<div className="movie-detail-right">{movie.Year}</div>
						</article>
		                <article className="movie-detail">
							<div className="movie-detail-left">imdbID: &nbsp;</div>
							<div className="movie-detail-right">{movie.imdbID}</div>
						</article>
		                <article className="movie-detail">
							<div className="movie-detail-left">Type: &nbsp;</div>
							<div className="movie-detail-right">{movie.Type}</div>
						</article>
          			</div>
              	);
            })}
		</div>
	);
};

export default MovieItem;