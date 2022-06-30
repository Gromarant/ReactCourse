//Fetch API

    const apiKey = 'mi36jhDTf0CsLAO3vARy2vPjT8FFFJEQ'; 

    const httpcall = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

    // httpcall.then( answer => {
    //     answer.json().then( data => {        //'json' is an answer method that return a promise
    //         console.log( data )
    //     });
    // })
    // .catch( console.warn );

    httpcall
    .then( answer => answer.json() )
    .then( ( { data } ) => {
        const { url } = data.images.original;

        const img = document.createElement( 'img' );
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );