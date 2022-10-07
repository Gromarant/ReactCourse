import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => setInputValue( target.value );

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        const newInput = inputValue.trim();
        if( newInput.length <= 1 ) return;
        onNewCategory( newInput);
        setInputValue('');
    }
   
  return (
    <form onSubmit={ onFormSubmit }>
        <input type='text' placeholder='find gifs' value={ inputValue } onChange={ onInputChange } />
    </form>
  )
};
