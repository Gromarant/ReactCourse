import { render, screen } from '@testing-library/react';
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

});