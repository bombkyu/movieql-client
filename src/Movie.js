import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Movie = ({id, title, rating, poster}) => (
    <Link to={`/details/:${id}`} >
        <h2>{title}</h2>
        <span>Rating:{rating}</span>
        <Poster poster={poster}/>
    </Link>
);

const Poster = ({poster}) => (
    <div>
        <img url={poster} />
    </div>
)


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    poster:PropTypes.string.isRequired
}

export default Movie;