test( 'this test must not fail', () => {
    if( 1 === 0 ) {
        throw new Error( 'you cannot divide by 0' );
    }
})