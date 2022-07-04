// lesson 35 - First component

import { Fragment } from "react";

    //rafc shorcut to create a component
        export const FirstComponent = ( ) => {        
            return (
                <h1>{ salaryOfert(50000) }</h1>
        )}
         
        //arrow function
            export const FirstArrowComponent = ( ) => <h1>{ salaryOfert(50000) }</h1>;
        
// lesson 36 - Homework - FirstApp
    export const FirstApp = ( ) => {
        return (
            <h1>Mariangelica</h1>
        )
    }

// lesson 37 - return elements inside the component - Fragments
export const NameApp = ( ) => {
    return (
        <> 
            <h1>Mariangelica</h1>
            <h2>Rodriguez</h2>
        </>
    )
}
        // <Fragment> </Fragment> ( it must be imported ) === <> </> ( it is not need be imported )
        //Fragment is use to return two elements

// lesson 38 - print variables inside the Html
    const salaryOfert = (salary) => {              
        return `1. The salary of ${ salary } Euros is for you`;
    };

    export const SalaryApp = ( ) => {
        return (
        <>         
            <h1>{ salaryOfert(50000) }</h1>
            <h2>2. Gromarant</h2>
        </>
        )
    }

    // Homework : add more examples and values
        const markName = '2. ';
        let addNumbers = '5. ' + 123;
        let addBoolean = true;
        const addArray = ['7. ', 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const addObject = {
            number: '8. ',
            title: 'Mariangelica',
            message: 'Hola mundo',
        };

        export const Examples = ( ) => {
        return (
            <>
                <p> 3. Portafolio y página profesional de Mariangelica Rodríguez, Ux Front end Developer www.gromarant.com, donde muestra sus proyectos y proceso de desarrollo</p>
                <p>{ '4. ' + 2 * 8 }</p>      {/* directs operations  */}
                <p>{ addNumbers }</p>
                <p>{ addBoolean }</p>
                <p>{ addArray }</p>
                <p>{ JSON.stringify( addObject ) }</p>        {/* React do not accept objects to render, if you need print an object you must have use a 'JSON.stringify'*/}
            </>
        )
        }

// lesson 39 - add style.css
        // style.css file