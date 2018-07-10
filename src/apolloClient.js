import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // The GraphQL API Address
	uri: 'https://movieql-osezlvyqsg.now.sh/',
});

export default client;