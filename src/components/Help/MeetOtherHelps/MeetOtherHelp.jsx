import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MeetOtherHelpRow from "./MeetOtherHelpRow"
import { Form, Button, Card, Container } from 'react-bootstrap'
import app from "../../../firebase"
import { useFirebaseDatabase } from "../../../contexts/FirebaseDatabase"
import { Link, useHistory } from "react-router-dom"

var database = app.database();

function MeetOtherHelp(props) {

    const [pageChanged, setPageChanged] = useState(0);

    const { tcNumber} = useFirebaseDatabase()
    const location = useLocation();
    const history = useHistory()

    var helpList = location.helpItem.helpList
    var i;
    if (pageChanged == 0) {
        for (i = 0; i < helpList.length; i++) {
            if (helpList[i].isProvided) {
                helpList[i].canBeEditable = false
            } else {
                helpList[i].canBeEditable = true
            }
            console.log(helpList[i])
        }
    }
    const type = 'checkbox'

    function handleChange(event) {
        helpList[event.target.name].isProvided = event.target.checked
        setPageChanged(pageChanged + 1)
    }

    function getTimeStamp() {
        var now = new Date();
        return ((now.getDate()) + '-' + (now.getMonth() + 1) + '-' + + now.getFullYear() + " " + now.getHours() + ':'
            + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                .getSeconds()) : (now.getSeconds())));
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newHelpList = []

        var i
        for (i = 0; i < location.helpItem.helpList.length; i++) {
            const newHelp = location.helpItem.helpList[i]

            console.log(newHelp)

            if (location.helpItem.helpList[i].isProvided && location.helpItem.helpList[i].canBeEditable) {
                newHelp.providedDate = getTimeStamp()
                newHelp.providedPersonTcNumber = tcNumber
            }
            delete helpList[i].canBeEditable;
            newHelpList.push(newHelp)
        }

        database.ref('Help/' + location.helpItem.tc_kimlikNo + '/' + location.helpKey).set({
            currentDate: location.helpItem.currentDate,
            isCompletelyProvided: false,
            isim: location.helpItem.isim,
            tc_kimlikNo: location.helpItem.tc_kimlikNo,
            userToken: location.helpItem.userToken,
            user_uid: location.helpItem.user_uid,
            helpList: newHelpList,
        });

        alert("Yardımda bulunacağınız kişiye bilgilerinizi bildirim ile gönderdik. Sizinle irtibata geçmesi için bekleyiniz.");
        history.push('/help/otherhelps')
    }


    return (
        <>
            <Container className="d-flex-align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            {helpList.map((helpItem, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        name={index}
                                        onChange={handleChange}
                                        type={type}
                                        id={`default-${type}`}
                                        label={!helpItem.canBeEditable ? helpItem.demandName + "  (Karşılandı)" : helpItem.demandName}
                                        //  defaultChecked={helpItem.isProvided}
                                        checked={helpItem.isProvided}
                                        disabled={!helpItem.canBeEditable}
                                    />
                                )
                            })}
                            <Button className="w-200" type="submit">Yardım Et</Button>
                        </Form>
                    </div>
                </div>

            </Container>
        </>
    )
}
export default MeetOtherHelp;