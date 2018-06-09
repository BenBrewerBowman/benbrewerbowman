import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './_components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
    
registerServiceWorker();
