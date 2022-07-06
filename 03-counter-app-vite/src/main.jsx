import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterAppHook } from './FirstApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        < CounterAppHook value={ 100 }/>
    </React.StrictMode>
);


// All imports made
    // import { DefPropsApp } from './FirstApp';
    // import { PropsApp } from './FirstApp';
    // import { FirstApp } from './FirstApp';
    // import { HelloWordApp } from './HelloWordApp';
    // import { CounterApp } from './CounterApp';
    // import { EventApp } from './FirstApp';
    // import { CounterApp1000 } from './FirstApp';
    // import { CounterAppHook } from './FirstApp';


//All components Rendering
    // <React.StrictMode>
    //     {/* <HelloWordApp /> */}
    //     {/* <FirstApp subtitle={25000} /> */}
    //     < PropsApp title="The salary of 50.000 Euros is for you" />
        // < DefPropsApp title="The salary of 50.000 Euros is for you" />
        // < CounterApp value={ 100000 }/>
        // < EventApp value={ 100000 }/>
        // < CounterApp1000 value={ 10 }/>
        // < CounterAppHook value={ 100 }/>
        // </React.StrictMode>