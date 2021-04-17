import React from "react";
import { useLocation } from "react-router-dom";
import MeetOtherHelpRow from "./MeetOtherHelpRow"
import { Form, Button, Card, Container } from 'react-bootstrap'
import app from "../../../firebase"
import { useFirebaseDatabase } from "../../../contexts/FirebaseDatabase"

var database = app.database();

function MeetOtherHelp(props) {

    const {tcNumber, currentUser } = useFirebaseDatabase()
    const location = useLocation();
    //location.helpItem.tc_kimlikNo}
    //location.helpKey}

    const type = 'checkbox'

    function handleChange(event) {
        console.log(event.index);
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

        location.helpItem.helpList.forEach(function (help) {
            const newHelp = help
            if (!help.isProvided){
                newHelp.providedDate = getTimeStamp()
                newHelp.providedPersonTcNumber = tcNumber
            }
            newHelpList.push(newHelp)
        });


        database.ref('Test/' + location.helpItem.tc_kimlikNo + '/' +location.helpKey).set({
            currentDate: location.helpItem.currentDate,
            isCompletelyProvided: false,
            isim: location.helpItem.isim,
            tc_kimlikNo: location.helpItem.tc_kimlikNo,
            userToken: location.helpItem.userToken,
            user_uid: location.helpItem.user_uid,
            helpList: newHelpList,
        });

      //  alert("Yardımda bulunacağınız kişiye bilgilerinizi bildirim ile gönderdik. Sizinle irtibata geçmesi için bekleyiniz.");
    }


    return (
        <>
            <Container className="d-flex-align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            {location.helpItem.helpList.map((helpItem, index) => {
                                return (
                                    <Form.Check         
                                        key={index}
                                        index={index}       
                                        onChange={handleChange}
                                        type={type}
                                        id={`default-${type}`}
                                        label={helpItem.isProvided ? helpItem.demandName + "  (Karşılandı)" : helpItem.demandName}
                                        defaultChecked={helpItem.isProvided}
                                        disabled={helpItem.isProvided}
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
