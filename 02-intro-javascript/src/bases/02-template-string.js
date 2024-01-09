//Template string

    const name = 'Miguel';
    const lastName = 'Varona';
    const nickName = 'Mig';

    const fullName = `${ name } ${ lastName }`;

    console.log (fullName);

    function getSaludo( nickName = 'User' ) {
        return `Hola ${ nickName }`;
    }

    console.log( 'function with an argument: ', getSaludo( nickName ));
    console.log( 'function without an argument: ', getSaludo() );