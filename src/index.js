import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,HashRouter} from 'react-router-dom';

const app = (
    <BrowserRouter>
            <HashRouter>
                <App />
            </HashRouter>
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));