//Literal objects

const persona = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    direction: {
        city: 'Berlin',
        zip:10249,
        lat: 49345,
        lng: 128785,
    }
};

console.log( persona );

    //create an object with property named 'persona' and value 'persona'
    //old code = console.log (
    //              persona:persona
    //           );

    //New way   // console.log ( { persona } ); 
        
    
    //console.table( persona );

//spread operator (...) copy properties of an object
const persona2 = { ...persona };
persona2.nombre = "Michael";

console.log( persona2 );
