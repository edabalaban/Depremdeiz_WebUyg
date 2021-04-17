import React, { useRef, useState } from "react";
import { Form, Button, Card, Container } from 'react-bootstrap'
import app, { auth } from "../firebase";
import { useHistory } from "react-router-dom"

var database = app.database();

function TcNumber() {

    const [user, setUser] = useState();

    const history = useHistory()
    const tcNumberRef = useRef()

    auth.onAuthStateChanged(user => {
        if (user == null) {
        } else {
            setUser(user)
        }
    })

    function handleSubmit(e) {
        e.preventDefault()

        const tcNumber = tcNumberRef.current.value

        database.ref('Profil/' + tcNumber).set({
            tc_kimlikNo: Number(tcNumber),
            email: user.email,
            isim: user.displayName,
            user_uid: user.uid
        });

        history.push('/home')
    }


    return (
        <>
            <Container className="d-flex-align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="test-center mb-4">Devam edebilmeniz için T.C. Kimlik numaranızı girmelisiniz.</h2>
                        </Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="tcNumber">
                                <Form.Control type="number" ref={tcNumberRef} required></Form.Control>
                            </Form.Group>
                            <Button type="submit" className="w-100" type="submit">
                                Devam et
                           </Button>
                        </Form>
                    </Card>

                </div>

            </Container>



        </>
    )
}
export default TcNumber;