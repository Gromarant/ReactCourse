import { getByText, render, getByTestId, getAllByText } from '@testing-library/react';
import { FirstApp } from '../src/section4/FirstApp';

describe('Test to <FirstApp />', () => {  

    //this test evaluates that a render <FirstApp /> with a snapshot created
        // test('1. Must be do match with the snapshot', () => {
        //     const title = 'Hola, Goku';
        //     const { container } =  render( <FirstApp title={ title } /> );
        //     expect( container ).toMatchSnapshot();
        // });

    test('2. must be show the title at h1 tag', () => { 

        const title = 'Hola, Goku';
        const { container, getByText, getByTestId } =  render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector( 'h1' );      //evaluates that the h1 content is identical to the title sended
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );
     })

     test('3. must be show the subtitle sent by the props', () => { 

        const title = 'Hola, Goku';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } =  render( <FirstApp title={ title } subTitle={ subTitle } /> );
        expect( getAllByText(subTitle).length ).toBe(2);
     })
});