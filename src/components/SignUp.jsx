import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import app, { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext"
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom"
import { useFirebaseDatabase } from "../contexts/FirebaseDatabase"

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
};

var database = app.database();

function SignUp() {

    const { getUserTcNo} = useFirebaseDatabase()
    const history = useHistory()

    auth.onAuthStateChanged(user => {
        // console.log(user);
        if (user == null) {

        } else {
            navigateUser(user.email)
        }
        console.log(user);
    })

    function logOutClicked() {
        auth.signOut().then(() => {
            console.log("success");
        }).catch((error) => {
            console.log("error");
        });
    }

    function navigateUser(email) {

        const query = database.ref('Profil');
        var isUserRegisteredDatabase = false;

        query.once('value', async (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childData.email)
                if (childData.email == email) {
                    getUserTcNo(childData.email)
                    isUserRegisteredDatabase= true;
                } 
            });
            if (isUserRegisteredDatabase) {
                history.push('/home')
            } else {
                history.push('/tcNumber')
            }

        });

    }


    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            <Button onClick={logOutClicked}>Log out</Button>
        </>
        // <StyledFirebaseAuth uiconfig={uiconfig} firebaseAuth={auth} />
    )
}


export default SignUp;