
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postListReducer from './Reducers/post-list-reducer';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(postListReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('root'))
  };

  render(App);
