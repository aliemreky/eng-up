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
      apiKey: ' xxxxxx',
      authDomain: 'xxxxxxxx',
      databaseURL: 'xxxxxxx',
      storageBucket: 'xxxxxxx',
      messagingSenderId: 'xxxxxxxxx'
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
