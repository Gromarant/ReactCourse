//Async-Await

    // //Regular promise
        const PromiseImg = () => new Promise( resolve => resolve( 'https://media2.giphy.com/media/M3nJGU4OSEngSfJhp6/giphy.gif?cid=ad7e9534f5fbecbba3eb93e75ce9d9bceef2ab17b8843107&rid=giphy.gif&ct=g' ) );

        PromiseImg().then( console.log );

    // //Regular synchronous function
        const regFunImg = () => {
            return 'https://media2.giphy.com/media/M3nJGU4OSEngSfJhp6/giphy.gif?cid=ad7e9534f5fbecbba3eb93e75ce9d9bceef2ab17b8843107&rid=giphy.gif&ct=g';
        }

        console.log( regFunImg() );

    //         //Transformation of a 'Regular synchronous function' into a promise with 'async function'
                const asyncImg = async() => {
                    return 'https://media2.giphy.com/media/M3nJGU4OSEngSfJhp6/giphy.gif?cid=ad7e9534f5fbecbba3eb93e75ce9d9bceef2ab17b8843107&rid=giphy.gif&ct=g';
                }

                console.log( asyncImg() );

    // //async-await        //'await functions' only work into an 'async function'
        const asyncAwaitImg = async() => {  
            const apiKey = 'mi36jhDTf0CsLAO3vARy2vPjT8FFFJEQ';
            const httpcall = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const data = await httpcall.json();

            console.log( data );
        }

        asyncAwaitImg();

        //Homework
        //1.Show image in the server
        const homeworkImg = async() => {  
            try {
            const apiKey = 'mi36jhDTf0CsLAO3vARy2vPjT8FFFJEQ';
            const httpcall = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const { data } = await httpcall.json();

            const { url } = data.images.original;
            const img = document.createElement( 'img' );
            img.src = url;
            document.body.append( img );
            } catch ( err ) {
                console.err(err);
            }
        } 

        homeworkImg();