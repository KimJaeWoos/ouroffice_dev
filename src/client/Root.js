/**
 * Created by Jaewoos on 2017-07-30.
 */
import React from  'react';
import { BrowserRouter } from 'react-router-dom';
import App from './../shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;