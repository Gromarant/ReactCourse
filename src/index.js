// import { getValue } from "@testing-library/user-event/dist/utils";
import { getHeroesById } from "./bases/08-Imports-exports";

//Promises

    // const promise0 = new Promise( (resolve, reject) => {       //Promise with long arrows functions
    //     setTimeout( () => { 
    //         resolve();
    //     }, 2000 );
    // })
    
    // promise.then( () => {                            //Then method with long arrows functions
    //     console.log( 'Then to the promise' );
    // })


     //Promise with shorts arrows functions
        const promise = new Promise( ( resolve, reject ) => setTimeout( () => resolve(), 2000 ));


        promise.then( () => console.log( '1. Then to the promise' ));

    //Homework
    //1. import 'getHeroById' to de 08-imports-exports.js file

        const homeWork = new Promise( ( resolve, reject ) => setTimeout(() => {
           const character = getHeroesById(2);
           resolve( character );
        }, 2000));

        homeWork.then( ( hero ) => console.log( '2. ', hero ));

        // .catch( err => console.warn( err ) );        //Is use when the promise is not working or kept
        const getHeroByIdAsync = ( id ) => {
            return new Promise( ( resolve, reject ) => setTimeout(() => {
                const character = getHeroesById( id );
                resolve( character );
             }, 2000));
        }

         getHeroByIdAsync(4)
         .then( hero => console.log( '3. Hero', hero));



         //Homework
         //1. Use the 'catch method"

         const getHeroByIdCatch = ( id ) => {
            return new Promise( ( resolve, reject ) => setTimeout(() => {       //The promise must be return
                const character = getHeroesById( id );
                if( character) {
                    resolve( character );
                } else {
                    reject ( 'character is not found' );
                }
             }, 3000));
    } 
         //Homework
             //2. simplify 'then and catch methods"
             getHeroByIdCatch(7)
             .then( console.log)         //'then and catch methods' return the first argument fetched by each method
             .catch (console.warn);  

            // getHeroByIdCatch(8)
            // .then( hero => console.log( '4. Hero', hero ))
            // .catch ( err => console.warn( ' 4. error: ', err ));        //When promise fails the 'catch method' must be use