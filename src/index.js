import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import './static/css/common.css';
import './static/css/Animation.css';
import './static/fonts/notosanskr.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
