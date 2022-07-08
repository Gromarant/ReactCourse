import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test to 06-deses-obj.js', () => { 
    
    test('usContext must be return an object', () => { 
        const clave = 'chosto';
        const edad = 90;
        const result = usContext({ clave, edad });
        
        
        expect( result.nombreClave ).toBe( clave );
        expect( result.anios ).toBe( edad );
        expect( result.latlng ).toEqual({
            lat: 14.1232,
            lng: -12.3232
        });
     });

    // Individual test, they are more specifics and easy to reviw if they failed
        // Test clave
            //  it('returns clave as nombreClave property', () => { 
            //      expect( result.nombreClave ).toBe( clave );
            //   });

        // Test edad
            //   test('usContext returns "edad" in "anios" property', () => {
            //     expect( result.anios ).toBe( edad );
            //   });

        // Test latlng
            //   test('fixed latlng property values', () => {
            //     expect( result.latlng ).toEqual({
            //         lat: 14.1232,
            //         lng: -12.3232
            //     });
            //   })
 }); 