import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterAppHandle } from './section4/CounterAppHandle';
import './styleGlobal.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterAppHandle />
    </React.StrictMode>
);