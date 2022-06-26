// destructuring assignment
    //Object
        const person = {
            name: 'Tony',
            age: 45,
            password: 'Ironman',
        }

        const { name, age, password } = person; //Object destructuring

        console.log ( name );
        console.log ( age );
        console.log ( password );

     //set default value "range = 'Capitán"
        const useContex = ({ name, age, range = 'Capitán', password }) => {
            return {
                passwordName: password,
                howOld: age,
                latlng: {
                    lat: 175.2855,
                    lng: -79.689,
                },
            }
        }

     //Straction of nested objects 'latlng: { lat, lng }'
        const { passwordName, howOld, latlng: { lat, lng } } = useContex( person );

        console.log( passwordName, howOld );
        console.log(  lat, lng ); // 'latlng' is not exist anymore, it change in two variables 'lat' and 'lng'