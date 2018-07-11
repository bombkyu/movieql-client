import React from 'react';
import {Query} from "react-apollo";
import {MOVIE_DETAILS} from "./queries";
import "./Detail.css";

const Detail = ({match : {params : {movieId}}}) => <Query query={MOVIE_DETAILS} variables={{movieId}} >{({loading, error, data}) => {

    if (loading) {
        return <span>Loading...</span>
    }
    if (error) {
        return <span>Something went wrong..</span>
    }
    console.log(data);
    return (
        <div className="detail_container">
            <div className="detail_movie">
                <img src= {data.movie.medium_cover_image}/>
                <div className="detail_description">
                    <span className="detail_title">{data.movie.title}</span>
                    <span className="detail_rating">{data.movie.rating}</span>
                    <p className="detail_summary">{data.movie.description_intro}</p>
                </div>
            </div>

            <div className="suggestion_container">
                <h2 className="suggestion_header">Suggestions</h2>
                <div className="suggestion_movies">
                    {data.suggestions.map(movie => (
                            <div className="suggestion_movie">
                                <img src={movie.medium_cover_image} />
                                <h3 className="suggestion_title">{movie.title}</h3>
                                <span className="suggestion_rating">{movie.rating}</span>
                            </div>
                    )
                    )}
                </div>

            </div>
    </div>
        
    )
    }}
    </Query>;

export default Detail;
