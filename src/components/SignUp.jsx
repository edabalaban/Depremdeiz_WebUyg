import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import app, { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext"
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom"
import { useFirebaseDatabase } from "../contexts/FirebaseDatabase"
import Loader from "react-loader-spinner";

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
            <Loader type="Oval" color="#ff7777" height={80} width={80} timeout={1000} style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
        </>
    )
}


export default SignUp;