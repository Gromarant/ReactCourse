//lesson 44 - Click events
  import PropTypes from 'prop-types';

  const handleEvent = ( event ) => {    //when the Constant have not relation with event, is a good practice writte it outside of the component
    console.log( event );
  }

  export const EventApp = ( { value } ) => {
    return (
          <>
              <h1>EventApp</h1>
              <h2> { value } </h2>
              <button onClick={ handleEvent }> 
              +1 
              </button>
          </>
      );
    }

  EventApp.propTypes = {
      value: PropTypes.number.isRequired,
  }

  //Click event inside xml code
    // <button onClick={ function() { console.log( '+1' ) } }> 
    //   +1 
    // </button>

  //Click event referenced inside xml code
    // <button onClick={ ( event ) => handleEvent( event ) }> 


//lesson 45 - UseState - Hooks
  //UseState changes without hooks
    // export const CounterApp1000 = ( { value } ) => {

    //   const handleEvent = () => {    //when the Constant have not relation with event, is a good practice writte it outside of the component
    //     console.log( '+1' );
    //     value = 1000;   //this change is not shown
    //   }

    //   return (
    //         <>
    //             <h1>CounterApp1000</h1>
    //             <h2> { value } </h2>
    //             <button onClick={ handleEvent }> 
    //             +1 
    //             </button>
    //         </>
    //     );
    // }

    // CounterApp1000.propTypes = {
    //     value: PropTypes.number.isRequired,
    // }


  //UseState changes with hooks
      import { useState } from 'react';
      
      export const CounterAppHook = ( { value } ) => {

        const [ counter, setCounter ] = useState( value );    //useState set the initial value
        const handleEvent = () => {
          setCounter ( counter + 1 );   //Another way, without the value of 'counter'
        };                              //setCounter( ( c ) => c + 1 );  c = current value of counter

        return (
          <>
            <h1>FirstApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleEvent }> 
              +1 
            </button>
          </>
        )
      }
      
      CounterAppHook.propTypes = {
        value: PropTypes.number.isRequired,
    }