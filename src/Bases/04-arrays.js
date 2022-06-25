//Arrays js []
 //note = arrays are objects in Js

    //use only to create an array with a fix size
        //const arr = new Array( number );

    //bad practice becaus 'push method' modify the object
        //array.push(1); 


        const array = [1, 2, 3, 4];
    
        let array2 = [ ...array, 5];
    
        const array3 = array2.map ( function (number) {   // 'map mathod' receives a function and create a new array
            return number*2;
        }); 
    
        console.log( array );
        console.log ( array2 );
        console.log ( array3 );   
