import React from "react";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";
import Movie from "./Movie";
import "./Movie.css";

const Home = () => <Query query={HOME_PAGE}>{({loading, data,error}) => {
    if(loading) {
        return <div className="loading_container">
				<span>Loading...</span>
			</div>;
    }
    if(error) {
        return <span>Something went wrong..</span>
    }
    return (
        <div className="movie_container">
            {data.movies.map(movie => (
                <Movie key={movie.id} id={movie.id} title={movie.title} rating={movie.rating} poster={movie.medium_cover_image} />
            ))}
        </div>
    )

}}</Query>;

export default Home;