import React from 'react';
import ReactDOM from 'react-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
