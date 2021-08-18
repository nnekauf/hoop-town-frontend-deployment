import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store.js'
import {BrowserRouter as Router} from 'react-router-dom'
import'./fonts/UrbanJungle/Urbanjungledemo-ymAm.otf'



ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);