//let and const
    //'var' should not be used any more
    const name = 'Mariangelica';
    const lastName = 'Rodríguez';

    let gettingValue = 5;

    console.log ( name, lastName, gettingValue);

//scope
    if (true) {
        let gettingValue = 6;
        console.log(gettingValue);
    }

    console.log(gettingValue);