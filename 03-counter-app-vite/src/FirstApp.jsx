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
      
      export const PropsApp = ( { title } ) => {
        return (
          <h1>{ title }</h1>
        )
      }
    
      PropsApp.protoTypes = {
        title: PropTypes.string.isRequired,
      }

//lesson 42 - DefaultProps 
  //DefaultProps in the top of the component
    // export const DefPropsApp = ({
    //   title,
    //   subtitle = 'Gromarant',
    // }) => {
    //     return (
    //      <>
    //         <h1>{ title }</h1>
    //         <h2>{ subtitle }</h2>
    //       </>
    //     )
    //   }


  //DefaultProps in the bottom of the component
    export const DefPropsApp = ({ title, subtitle, name }) => {
        return (
         <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <h3>{ name }</h3>
          </>
        )
      }

    DefPropsApp.defaultProps = {
      name: 'Mariangelica Rodriguez',
      subtitle: 'There is not subtitle',
      title: 'There is not title',
    }

    DefPropsApp.protoTypes = {
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    } 