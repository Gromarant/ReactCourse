//Ternary conditional operator

    //regular way to make a decision
        const active = true;
        let message = '';

        if( !active ) {
            message = 'Active';
        } else {
            message = 'Inactive';
        }

        console.log ( '1. ', message );

        //make a decision with a 'ternary conditional operator'
            const activeUser = true;
            const messageUser = ( activeUser ) ? 'Active' : 'Inactive';

            console.log ( '2. ', messageUser );

        //make a decision with a unique conditional
            const activeUni = true;
            const messageUni = ( !activeUser ) && 'Active';

            console.log ( '3. ', messageUni );      //when the 'unique condition' is not met, the '&& operator' returns 'false'