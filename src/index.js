import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import './static/css/common.css';
import './static/css/Animation.css';
import './static/fonts/notosanskr.css';
import registerServiceWorker from './registerServiceWorker';
import loginApp from './reducers';

const store = createStore(loginApp);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
