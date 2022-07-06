//lesson 45 handleSubtract and handleReset
  import { useState } from 'react';
  import PropTypes from 'prop-types';

  export const CounterAppHandle = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );    //useState set the initial value
    const handleEvent = () => {
      setCounter ( counter + 1 );   //Another way, without the value of 'counter'
    };                    //setCounter( ( c ) => c + 1 );  c = current value of counter

    return (
      <>
        <h1>handleSubtract and handleReset</h1>
        <h2> { counter } </h2>
        <button onClick={ handleEvent }> +1 </button>
        <button onClick={ () => setCounter( counter -1 ) }> -1 </button>
        <button onClick={ () => setCounter( value ) }> Reset </button>
      </>
    )
  }

  CounterAppHandle.propTypes = {
    value: PropTypes.number.isRequired,
  }