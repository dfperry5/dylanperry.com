import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
// import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import tether from 'tether';

window.Tether = tether;
window.jQuery = $;

require('bootstrap');

ReactDOM.render(
 <App />,
document.getElementById('root'));
registerServiceWorker();
