//lesson 40 - Components comunication

  //props access
    const nameFunction = ( props ) => {       
      <>
        <h1>{ props.title }</h1>
      </>
    }

  //props access with destructuring
    const TitleFunction = ( { title } ) => {
      <>
        <h1>{ title }</h1>
      </>
    }
  
    export const FirstApp = ( { title, subtitle } ) => {
      return (
        <>
            <h1>{ title }</h1> 
            <p>{ subtitle + 25000 }</p>
        </> 
      )
    }

      // default value of props 
        // export const FirstApp = ( { title = 'Hola mundo' } ) => {}