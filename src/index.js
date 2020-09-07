import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';

const MOUNT = document.querySelector('#root');
const renderApp = Comp => ReactDOM.render(Comp, MOUNT);

if(module.hot) {
  module.hot.accept('./routes', () => {
    // accept hot change request
    const NextRoutes = require('./routes').default;
    renderApp(<NextRoutes />);
  })
}

renderApp(<Routes />);
