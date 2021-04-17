import React, { useState, useEffect, Children } from "react";
import app from "../../firebase";
import { useFirebaseDatabase } from "../../contexts/FirebaseDatabase";
import OthersHelpRow from "./OthersHelpRow";

var database = app.database();

function OtherHelp() {

    const { tcNumber } = useFirebaseDatabase()
    const [helpList, setHelpList] = useState([]);
    const [helpKeys, setHelpKey] = useState([]);


    useEffect(() => {
        var myHelpRef = database.ref('Help');
        myHelpRef.once('value', async (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();

                Object.keys(childData).forEach(function (key) {
                    if (childData[key].tc_kimlikNo !== tcNumber) {
                       // console.log(childData[key]);
                        console.log(key);
                        setHelpKey(prevKeys => {
                            return [...prevKeys, key]
                        });
                        setHelpList(prevHelps => {
                            return [...prevHelps, childData[key]]
                        });
                    }
                });
            });
        });
    }, []);

    return (
        <>
            {helpList.map((helpItem, index) => {
                return <OthersHelpRow
                    key={index}
                    helpKey={helpKeys[index]}
                    item={helpItem} />
            })}
        </>
    )
}
export default OtherHelp;