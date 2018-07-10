import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies(limit: 10, rating: 4) {
            id
            title
            rating
            genres
            description_intro
        }
    }
`;