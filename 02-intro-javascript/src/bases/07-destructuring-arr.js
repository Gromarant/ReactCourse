//Destructuring Arrays
    const characters = [ 'Goku', 'Vegeta', 'Trunks',];  //Array declaration

    const [ p1, p2, p3 ] = characters;  //Destructuring
    //const [ , p2 ] = characters;   //only gets p2 value
    //const [ , , p3 ] = characters;   //only gets p3 value

    console.log ( p2 );


    // const returnArray = () => {
    //     return [ 'ABC', 123 ];
    // }
    const returnArray = () => ([ 'ABC', 123 ]);     //Arrow function declaration with implicit array
    const [ Letters, numbers ] = returnArray();     //Destructuring

    console.log( Letters, numbers);

    //Homework
        // 1. the first value of array would be named 'alias'
        // 2. the second value of array would be named 'setName'
        // 3. make destructuring in 'const arr = useState ( 'Goku' );'
        // 4. Call the function setName with 'setName();'

            // const useState = ( value ) => {
            //     return [ value, ()=> { console.log('Hola Mundo')}];
            // }

            // const arr = useState ( 'Goku' );
            // console.log(arr);
            // arr[1]();    //Call a function into an array

            //Answer
                const useState = ( val ) => {
                    return [ val, () => { console.log('Hola Mundo')}];
                }

                const [ alias, setName ] = useState( 'Goku' );
                console.log( alias );
                setName();