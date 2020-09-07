import React from 'react';
import ColorProvider from './provider';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
