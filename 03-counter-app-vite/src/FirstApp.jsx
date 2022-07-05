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