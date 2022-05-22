import React from 'react'
import LoggedInContext from "./LoggedinContext";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';

const LoggedInState = (props) => {
    const [userStatus, setUserStatus] = useState({})

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserStatus(user);
        // ...
    } else {
        // User is signed out
        // ...
        setUserStatus({})
    }
    });

    

    return(
        <LoggedInContext.Provider value={{userStatus, setUserStatus}}>
            {props.children}
        </LoggedInContext.Provider>
    )
}

export default LoggedInState;