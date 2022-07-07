import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterAppTest } from './Test';
import './styleGlobal.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < CounterAppTest value={ 0 }/>
    </React.StrictMode>
);