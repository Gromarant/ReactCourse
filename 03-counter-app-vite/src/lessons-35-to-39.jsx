const salaryOfert = (salary) => {
    return `1. The salary of ${ salary } Euros is for you`;
};
const markName = '2. Gromarant';
let addNumbers = '5. ' + 123;
let addBoolean = true;
const addArray = ['7. ', 1, 2, 3, 4, 5, 6, 7, 8, 9];
const addObject = {
    number: '8. ',
    title: 'Mariangelica',
    message: 'Hola mundo',
};


export const FirstApp = ( ) => {
  return (
    <>
        <h1>{ salaryOfert(50000) }</h1>
        <h2>{ markName }</h2>
        <p> 3. Portafolio y página profesional de Mariangelica Rodríguez, Ux Front end Developer www.gromarant.com, donde muestra sus proyectos y proceso de desarrollo</p>
        <p>{ '4. ' + 2 * 8 }</p>      {/* directs operations  */}
        <p>{ addNumbers }</p>
        <p>{ addBoolean }</p>
        <p>{ addArray }</p>
        <p>{ JSON.stringify( addObject ) }</p>        {/* React do not accept objects to render, if you need print an object you must have use a 'JSON.stringify'*/}
    </>
  )
}

// const nameFunction = ( props ) => {       
//   <>
//     <h1>{ props.title }</h1>
//   </>
// }

// const nameFunction = ( { title } ) => {
//   <>
//     <h1>{ title }</h1>
//   </>
// }