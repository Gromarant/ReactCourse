import { getByText, render } from '@testing-library/react';
import { FirstApp } from '../src/section4/FirstApp';

describe('Test to <FirstApp />', () => {  

    test('1. Must be do match with the snapshot', () => {

        const title = 'Hola, Goku';
        const { container } =  render( <FirstApp title={ title } /> );
        
        expect( container ).toMatchSnapshot();
    });

    test('2. must be show the title at h1 tag', () => { 

        const title = 'Hola, Goku';
        const { container, getByText } =  render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector( 'h1' );
        expect( h1.innerHTML ).toContain( title );

     })
});