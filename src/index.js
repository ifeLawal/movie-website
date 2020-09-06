import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MOUNT = document.querySelector('#root');
const renderApp = Comp => ReactDOM.render(Comp, MOUNT);

if(module.hot) {
  module.hot.accept('./App', () => {
    // accept hot change request
    const NextApp = require('./App').default;
    renderApp(<NextApp />);
  })
}

renderApp(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
