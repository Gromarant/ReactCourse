// import heroes from './data/heroes';     //import by default
// import  { heroes, owners } from './data/heroes';     //import by global export
import heroes, { owners } from './data/heroes';     //import by default + individual import

console.log ( heroes, owners );