import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test to 09-promesas.js', () => { 
    
    test('1. getHeroeByIdAsync, must be return an hero', ( done ) => { 
        const id = 1;

        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })

     });

     test('2. getHeroeByIdAsync, must be throw an Error if hero does not exist', ( done ) => { 
        const id = 20;
        
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe con el id: ${ id }`);
                console.log( error);
                done();
            });
     });
 });