//let and const
     //'var' should not be used any more
     const name = 'Mariangelica';
     const lastName = 'Rodríguez';
 
     let gettingValue = 5;
 
     console.log ( name, lastName, 'gettingValue: ', gettingValue);
 
 // scope variables
     if (true) {
         let gettingValue = 10;
         console.log('if_gettingValue: ', gettingValue);
     }

console.log('gettingValue_at_the_end: ', gettingValue);