import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
 <App />,
document.getElementById('root'));
registerServiceWorker();
