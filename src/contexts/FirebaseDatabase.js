import app from "../firebase";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"

const DatabaseContext = React.createContext()

export function useFirebaseDatabase() {
    return useContext(DatabaseContext)
}

export default function FirebaseDatabaseProvider({ children }) {

    var database = app.database();
    const [tcNumber, setTcNumber] = useState()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        console.log(tcNumber)
    }, [])

    auth.onAuthStateChanged(user => {
        console.log(user)
    })


    function getUserTcNo(email) {

        const query = database.ref('Profil');

        query.once('value', async (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if (childData.email == email) {
                    setCurrentUser(childData)
                    setTcNumber(childData.tc_kimlikNo)
                }
            });
        });
    }

    const value = {
        tcNumber,
        getUserTcNo,
        currentUser
    }
    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )
}