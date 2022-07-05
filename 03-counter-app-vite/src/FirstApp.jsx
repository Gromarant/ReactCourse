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

//lesson 41 - propTypes
    //this way the code generate an Error inside the component, it is not a good practice
  export const PropsAppErr = ( { title } ) => {
      if( !title ) {
        throw new Error( 'The title is missing' );
      }
      return (
        <h1>{ title }</h1>
      )
    }

    //Imported and used PropTypes, with Vite the PropTypes are not downlouded
      import PropTypes from 'prop-types';
      
      export const PropsApp = ( {title} ) => {
        return (
          <h1>{ title }</h1>
        )
      }
    
      PropsApp.protoTypes = {
        title: PropTypes.string.isRequired,
      }