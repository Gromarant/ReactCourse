import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Test 07-deses-arr.js', () => { 

    test('must be return a string and a number', () => { 

        const [ letters, numbers ] = retornaArreglo();

    //check that the letters and a numbers reciebed by retornaArreglo are exactly " 'ABC' and 123 "
        expect( letters ).toBe( 'ABC' );        
        expect( numbers ).toBe( 123 );
    
    //check that the letters and a numbers reciebed by retornaArreglo are 'string' and 'number'
        expect ( typeof letters ).toBe( 'string' );
        expect ( typeof numbers ).toBe( 'number' );

    //check that the letters and a numbers reciebed by retornaArreglo are 'any string' and 'any number'
        expect ( typeof numbers ).toEqual( expect.any( String ));

     });

 });