import React from 'react';
import ReactDOM from 'react-dom/client';
import { EventApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < EventApp value={ 100000 }/>
    </React.StrictMode>
);


// imports
    // import { DefPropsApp } from './FirstApp';
    // import { PropsApp } from './FirstApp';
    // import { FirstApp } from './FirstApp';
    // import { HelloWordApp } from './HelloWordApp';
    // import { CounterApp } from './CounterApp';


//Rendering of components
    // <React.StrictMode>
    //     {/* <HelloWordApp /> */}
    //     {/* <FirstApp subtitle={25000} /> */}
    //     < PropsApp title="The salary of 50.000 Euros is for you" />
        // < DefPropsApp title="The salary of 50.000 Euros is for you" />
        // < CounterApp value={ 100000 }/>
    // </React.StrictMode>