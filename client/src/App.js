import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
// import NotFound from './pages/NotFound';
import Header from './components/Header';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
    <Home/>
    </ApolloProvider>
  );
}

export default App;
