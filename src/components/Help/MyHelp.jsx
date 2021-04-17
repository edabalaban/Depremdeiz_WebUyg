import React, { useState, useEffect } from "react";
import app from "../../firebase";
import { useFirebaseDatabase } from "../../contexts/FirebaseDatabase";
import MyHelpRow from "./MyHelpRow";

var database = app.database();

function MyHelp() {

    const { tcNumber} = useFirebaseDatabase()
    const [helpList, setHelpList] = useState([]);

    useEffect(() => {
        var myHelpRef = database.ref('Help/' + tcNumber);
        myHelpRef.once('value', async (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                console.log(childData);
                setHelpList(prevHelps => {
                    return [...prevHelps, childData]
                });
            });
        });
    }, []);

    return (
        <>
        
            <div>
                {helpList.length == 0 ? <h2>Henüz hiç yardım talebinde bulunmadınız.</h2> : <h7> </h7> }
            </div>
            {helpList.map((helpItem, index) => {
                return <MyHelpRow
                    key={index}
                    item={helpItem} />
            })}
        </>
    )
}
export default MyHelp;