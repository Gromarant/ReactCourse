import React from 'react';
import ReactDOM from 'react-dom/client';
import { DefPropsApp } from './FirstApp';
// import { PropsApp } from './FirstApp';
// import { FirstApp } from './FirstApp';
// import { HelloWordApp } from './HelloWordApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < DefPropsApp title="The salary of 50.000 Euros is for you" />
    </React.StrictMode>
);

//Rendering of components
    // <React.StrictMode>
    //     {/* <HelloWordApp /> */}
    //     {/* <FirstApp subtitle={25000} /> */}
    //     < PropsApp title="The salary of 50.000 Euros is for you" />
    // </React.StrictMode>