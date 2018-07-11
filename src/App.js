import React, { Component } from 'react';
import {ApolloProvider} from "react-apollo";
import {HashRouter as Router, Route} from "react-router-dom";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import "./App.css";

class App extends Component {
  render() {
    return <ApolloProvider client={client}>
			<Router>
				<div className="container">
					<header>
						<div className="logo">
							<span>Netflix</span>
						</div>
						<div className="menu">
							<span>Movies</span>
							<span>TV Show</span>
							<span>Popular</span>
							<span>Favorite</span>
						</div>
					</header>
					<Route exact={true} path={'/'} component={Home} />
					<Route path={'/details/:movieId'} component={Detail} />
				</div>
			</Router>
		</ApolloProvider>;
  }
}

export default App;
