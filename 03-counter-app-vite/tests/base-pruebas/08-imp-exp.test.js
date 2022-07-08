import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Test to 08-impo-exp.js', () => { 
    
    test('1. getHeroeById must be return an heroe by Id', () => { 
        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('2. getHeroeByI must be return undefined if the id does not exist', () => { 
        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();

    });

//Homework 
//1. must be return an array with the DC heroes (Length === 3)
//2. use toEqual for evaluate each hero from the array
//3. must be return an array with the Marvel heroes (length === 2)

    test('3. return an array with the DC objects', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
        
        expect( hero.length ).toBe( 3 );
        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    })  
    

    test('4. return an array with the Marvel objects', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner );

        expect( hero.length ).toBe( 2 );
        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    })

 });

