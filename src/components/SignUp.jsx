import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import auth from '../firebase';
import app from "../firebase";

// var uiconfig = {
//     signInFlow: 'popup',
//     signInOptions: [
//         auth.GoogleAuthProvider.PROVIDER_ID
//     ],
// };


function SignUp(){
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => app.auth().signOut()}>Sing out </button>
        </>
       // <StyledFirebaseAuth uiconfig={uiconfig} firebaseAuth={auth} />
    )
}


export default SignUp;