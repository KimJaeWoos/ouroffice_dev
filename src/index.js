import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import 'semantic-ui-css/semantic.min.css';
import './static/css/Ouroffice.css';
import './static/css/Animation.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
