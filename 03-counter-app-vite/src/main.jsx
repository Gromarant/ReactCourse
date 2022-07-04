import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// import { HelloWordApp } from './HelloWordApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWordApp /> */}
        <FirstApp />
    </React.StrictMode>
);