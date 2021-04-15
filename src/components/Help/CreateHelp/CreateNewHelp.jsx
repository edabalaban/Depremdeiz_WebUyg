import React, { useState } from "react";
import CreateHelpArea from "./CreateHelpArea";
import CreateHelpRow from "./CreateHelpRow"
import app from "../../../firebase"
import { useFirebaseDatabase } from "../../../contexts/FirebaseDatabase"

var database = app.database();

function CreateHelp() {

    const { getUserTcNo, tcNumber, currentUser } = useFirebaseDatabase()
    const [helps, setHelps] = useState([]);

    function addHelp(newHelp) {
        setHelps(prevHelps => {
            return [...prevHelps, newHelp]
        });
    }

    function getTimeStamp() {
       var now = new Date();
       return ((now.getDate()) + '-' + (now.getMonth() + 1) + '-' + + now.getFullYear() + " " + now.getHours() + ':'
                     + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                     .getSeconds()) : (now.getSeconds())));
}

    function sendHelpListToFirebase() {

        const helpRef = database.ref('Help/' + tcNumber).push();
        const currentDate = getTimeStamp()

        let helpList = [];
        var i;
        for(i in helps){
            helpList.push({demandName: helps[i], isProvided: false, providedDate: ""})
        }
        helpRef.set({
            tc_kimlikNo: tcNumber,
            currentDate: currentDate,
            isCompletelyProvided: false,
            isim: currentUser.isim,
            user_uid: currentUser.user_uid,
            helpList: helpList
        });

        alert("Yardım talebiniz gönderildi.");

    }

    return (
        <div>
            <div>
                <CreateHelpArea onAdd={addHelp} />
                {helps.map((helpItem, index) => {
                    return <CreateHelpRow
                        key={index}
                        title={helpItem} />
                })}
            </div>
            <button className="submitButton" onClick={sendHelpListToFirebase}>Yardım Talebinde Bulun</button>
        </div>
    );
}
export default CreateHelp;