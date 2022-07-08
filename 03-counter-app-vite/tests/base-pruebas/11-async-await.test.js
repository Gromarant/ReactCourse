import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test to 11-async-await.js', () => { 

    test('1. getImagen, returns an url', async() => { 
        const url = await getImagen();
        
        expect( typeof url ).toBe( 'string' );
    });
});