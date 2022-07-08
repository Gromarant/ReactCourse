import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Test to 08-impo-exp.js', () => { 
    
    test('getHeroeById must be return an heroe by Id', () => { 

        const id = 1;
        const heroe = getHeroeById( id );
        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeByI must be return undefined if the id does not exist', () => { 

        const id = 100;
        const heroe = getHeroeById( id );
        expect( heroe ).toBeFalsy();

    });

 });