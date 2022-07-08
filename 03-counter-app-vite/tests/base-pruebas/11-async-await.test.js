import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test to 11-async-await.js', () => { 

    test('1. getImagen, returns an url', async() => { 
        
        const url = await getImagen();
        expect( typeof url ).toBe( 'string' );
    });

    test('2. getImagen, error', async() => { 

        const answer = await getImagen();
        expect( answer ).toBe( 'No se encontró la imagen' );
    });
});