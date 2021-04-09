import React, { useRef } from "react";
import { Form, Button, Card, Container } from 'react-bootstrap'

function TcNumber() {

    const tcNumberRef = useRef()


    return (
        <>
            <Container className="d-flex-align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="test-center mb-4">Devam edebilmeniz için T.C. Kimlik numaranızı girmelisiniz.</h2>
                        </Card.Body>
                        <Form>
                            <Form.Group id="tcNumber">
                                <Form.Control type="number" ref={tcNumberRef} required></Form.Control>
                            </Form.Group>
                            <Button className="w-100" type="submit">
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