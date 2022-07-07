import { getUser } from "../../src/base-pruebas/05-funciones";

describe('05-funciones.js test', () => { 

    test('getUser must be return an object', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toEqual( user );
    });

 });
