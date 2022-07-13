import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './section4/FirstApp';
import './styleGlobal.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < FirstApp title="www.gromarant.com"/>
    </React.StrictMode>
);