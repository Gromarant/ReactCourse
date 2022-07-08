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

 });