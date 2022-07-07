test( 'this test must not fail', () => {
   
    //1. Arrange
        const message1 = "First test";

    //2. Act
        const message2 = message1.trim();

    //3. Assert 
        expect( message1 ).toBe( message2 );
})