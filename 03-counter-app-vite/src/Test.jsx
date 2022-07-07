import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterAppTest = ( { value } ) => {

  const [ counter, setCounter ] = useState( value );    //useState set the initial value
  const handleEvent = () => setCounter ( counter + 1 ); 
  const handleSubtract = () => setCounter( counter -1 );
  const handleReset = () => setCounter( value );              //setCounter( ( c ) => c + 1 );  c = current value of counter

  return (
    <>
      <h1>Test 01</h1>
      <h2> { counter } </h2>
      <button onClick={ handleEvent }> +1 </button>
      <button onClick={ handleSubtract }> -1 </button>
      <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterAppTest.propTypes = {
  value: PropTypes.number.isRequired,
}