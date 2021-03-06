//Imports and exports
    // import { heroes } from "../data/heroes";      //first option = write directly  import { file } from "path";
    // import { heroes } from '../data/heroes'       //second option = Press 'imp' + 'tab' and fill the blanks
    import heroes from '../data/heroes';     //import by default
    // import { heroes } from "../data/heroes";      //third option = Write 'file name-(heroes)' and press enter or tab

    //import  { heroes, owners } from '../data/heroes';     //import by global export
    // import heroes, { owners } from '../data/heroes';     //import by default + individual import

    //Homework
    //1. make that getheroeById return an hero
        const getHeroById = (id) => {
            return heroes.find( hero => hero.id === id);    //Find() method is used
        }

        console.log( getHeroById(1) );
        // console.log( getHeroById(2) );
        // console.log( getHeroById(3) );

        //Another way to do the getHeroById function
        export const getHeroesById = (id) => heroes.find( hero => hero.id === id);

        export const getHeroByOwner = ( owner ) => heroes.filter( hero => hero.owner === owner);       //Filter() method is used

        // console.log( getHeroByOwner( 'DC' ) );
        // console.log( getHeroByOwner( 'Marvel' ) );
        // console.log( heroes, owners );