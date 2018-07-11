import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './Movie.css';

const Movie = ({ id, title, rating, poster }) => (
	<Link to={`/details/${id}`} style={{textDecoration:'none'}}>
		<div className="movie_item">
			<Poster poster={poster} />
			<h2 className="movie_title">{title}</h2>
			<span className="movie_rating">Rating:{rating}</span>
		</div>
	</Link>
);

const Poster = ({poster}) => (
    <div className="poster_container">
        <img className="movie_poster" src={poster} />
    </div>
)


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    poster:PropTypes.string.isRequired
}

export default Movie;