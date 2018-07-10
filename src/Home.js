import React from "react";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";
import Movie from "./Movie";

const Home = () => <Query query={HOME_PAGE}>{({loading, data,error}) => {
    if(loading) {
        return <span>Loading...</span>
    }
    if(error) {
        return <span>Something went wrong..</span>
    }
    return data.movies.map(movie => (
        <Movie key={movie.id} id={movie.id} title={movie.title} rating={movie.rating} poster={movie.poster} />
    ))

}}</Query>;

export default Home;