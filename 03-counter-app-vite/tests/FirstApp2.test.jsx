import { render, screen, getAllByText } from '@testing-library/react';
import { FirstApp } from '../src/section4/FirstApp';

describe('Test to <FirstApp />', () => {  
    const title = 'Hola, Goku';
    const subtitle = 'Soy un subtítulo';

    test('1. Must be do match with the snapshot', () => {

        const { container } = render( <FirstApp title={ title }/>);
        expect ( container ).toMatchSnapshot();
     });

    test('2. Must be show the message Hola, soy Goku', () => { 

        render( <FirstApp title={ title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
     });

     test('3. must be show the title in h1 tag', () => { 

        render( <FirstApp title={ title } /> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );
     })

     test('4. must be show the subtitle sent by the props', () => { 

        render( <FirstApp title={ title } subTitle={ subtitle } /> );
        expect( screen.getAllByText( subtitle ).length).toBe(2);
     })

});