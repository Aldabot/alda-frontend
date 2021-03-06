import React from 'react'
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

const graphqlEndpoint = "https://n5o6hyplo5.execute-api.eu-west-1.amazonaws.com/dev/graphqlServer"
// const graphqlEndpoint = "http://localhost:4000/graphqlServer"

const client = new ApolloClient({
  uri: graphqlEndpoint
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
