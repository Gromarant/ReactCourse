import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe( 'Test of 02-template-string.js', () => { 
    
    test( 'getSaludo must be return "Hola Fernando"', () => {

        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    })
})