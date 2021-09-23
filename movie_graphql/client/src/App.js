import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMovies from "./components/Movies";
import OneMovie from "./components/OneMovie";
import NavBar from "./components/NavBar";
import AllShows from "./components/Shows";
import OneShow from "./components/OneShow";

// const httpLink = createHttpLink({
//   uri: "/graphql", //The URI of the GraphQL endpoint that Apollo Client will communicate with.
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // You can provide an Apollo Link instance to serve as Apollo Client's network layer.
//   link: authLink.concat(httpLink),
//   // The cache that Apollo Client should use to store query results locally.
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:3001/graphql",
  uri: "https://tmdb.apps.quintero.io/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <AllMovies />
            <AllShows />
          </Route>
          <Route exact path="/movie/:id">
            <OneMovie />
          </Route>
          <Route exact path="/show/:id">
            <OneShow />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
