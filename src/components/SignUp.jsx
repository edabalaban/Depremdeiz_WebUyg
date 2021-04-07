import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext"


const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
};


function SignUp(){
    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
       // <StyledFirebaseAuth uiconfig={uiconfig} firebaseAuth={auth} />
    )
}


export default SignUp;