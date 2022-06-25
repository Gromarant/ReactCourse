//Template string

    const name = 'Miguel';
    const lastName = 'Varona';
    const nickName = 'Mig';

    const entireName = `${ name } ${ lastName }`;

    console.log (entireName);

    function getSaludo( nickName ) {
        return `Hola ${ nickName }`;
    }

    console.log( getSaludo( nickName ));