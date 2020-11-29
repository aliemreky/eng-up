import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: ' AIzaSyBIUlxdLreAkEHhX6b3fFBWjvAFFD8Elos',
      authDomain: 'engup-db503.firebaseapp.com',
      databaseURL: 'https://engup-db503.firebaseio.com',
      storageBucket: 'engup-db503.appspot.com',
      messagingSenderId: '749282617098'
    };

    firebase.initializeApp(config);    
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
