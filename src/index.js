import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/APP';
import 'mdbreact/dist/css/mdb.css';
import './components/index.scss';
// bootstrap
// import 'bootstrap';
import 'bootstrap-css-only/css/bootstrap.min.css';

// bootstrap support: Material Design Bootstrap
import 'mdbreact/dist/css/mdb.css';
import 'semantic-ui-css/semantic.min.css';

// fonts
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);