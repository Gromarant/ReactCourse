//Functions in Js

    // old way, it is not the best becaus is easier to modify content 
        //  function sayHi( name ) {
        //      return `Hola, ${ name }`;
        //  }

     //normal function =
     const sayHi = function ( name ) {  
        return `Hola, ${ name }`;
    }

    //arrow function
        const sayHello =  ( name ) => `Hola, ${ name }`;  

        //  const getUser = () => {
        //     return {
        //         unid: 'ABC123',
        //         username: 'Gromarant',
        //     }
        // }

        const getUser = () => ({ 
                unid: 'ABC123',
                username: 'Gromarant',
        })

        const user = getUser();

    console.log ( sayHi( 'Mig' ) );
    console.log ( sayHello( 'Bebexita' ) );
    console.log ( user );

    //Homework
    //1. transform getActiveUser to an arrow function
    //2. Must be return an implicit object
    //3. test it

        // function getActiveUser ( name ) {
        //     return {
        //         unid: 'ABC567',
        //         userName: name,
        //     }
        // }

    //Answer
        const getActiveUser = ( name ) => ({
                unid: 'ABC567',
                userName: name,
        });
        

        const activeUser = getActiveUser('Luis');
        console.log( activeUser );
