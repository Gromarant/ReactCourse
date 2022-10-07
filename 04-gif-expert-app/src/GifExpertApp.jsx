import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {    
  const [categories, setCategories] = useState(['Ome Punch', 'Dragon Ball']);
  
  const onAddCategory = ( onNewCategory ) => setCategories([ onNewCategory, ...categories ]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory  onNewCategory={ onAddCategory } />
      <ol>
          { categories.map( category => <li key={ category }>{ category }</li>) }
      </ol>
    </>
  )
};