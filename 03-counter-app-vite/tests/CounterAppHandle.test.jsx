import { fireEvent, render, screen } from '@testing-library/react';
import { CounterAppHandle } from '../src/section4/CounterAppHandle';

describe('Test to <CounterAppHandle />', () => {
    const value = 20;
    
    test('1. should be do match with the snapshot', () => { 

        const { container } = render(<CounterAppHandle value={ value } />);
        expect( container ).toMatchSnapshot();
     });

     test('2. Must be show number 100 as a <CounterAppHandle value={ 100 } />', () => { 

        render(<CounterAppHandle value={ 100 } />);
        expect( screen.getByText( 100 ) ).toBeTruthy();

    });

    test('3. should be increased plus one the counter with de "button +1"', () => { 

        render( <CounterAppHandle value={ value } /> );
        fireEvent.click( screen.getByText( '+1' ));
        expect( screen.getByText( '21' ) ).toBeTruthy();
     })

     test('4. should be decreased menos one the counter with de "button -1"', () => { 

        render( <CounterAppHandle value={ value } /> );
        fireEvent.click( screen.getByText( '-1' ));
        expect( screen.getByText( '19' ) ).toBeTruthy();
     })

     test('5. should be work the reset button', () => { 

        render( <CounterAppHandle value={ value } /> );
        fireEvent.click( screen.getByText( 'Reset' ));
        expect( screen.getByText( value ) ).toBeTruthy();
     })
});