import Proptypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        <h3>{ subTitle }</h3>
        <h3>{ subTitle }</h3>
        <p>{ name }</p>
    </>
  )
}

FirstApp.Proptypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.string,
}

FirstApp.defaultProps = {
    name: 'Mariangelica Rodriguez',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título',
}