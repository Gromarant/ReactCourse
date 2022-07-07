import { getUser, getUserActive } from "../../src/base-pruebas/05-funciones";

describe('05-funciones.js test', () => { 

    test('getUser must be return an object', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toEqual( user );
    });

    // test('getUserActive must be return an object', () => { 
        
    //     const name = 'Mariangelica';

    //     const testUserName = {
    //         uid: 'ABC567',
    //         username: name
    //     };

    //     const userActive = getUserActive( name );

    //     expect( testUserName ).toEqual( userActive );

    //  });

     test('getUserActive must be return an object', () => {     //resolve by Fernando
        
        const name = 'Mariangelica';

        const userActive = getUserActive( name );

        expect( userActive ).toStrictEqual( {
            uid: 'ABC567',
            username: name
        });

     });

 });
