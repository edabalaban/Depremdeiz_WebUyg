import React from "react";
import { Form, Button, Card } from 'react-bootstrap'

function Profile() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profilim</h2>
                    <Form.Group>
                        <Form.Label>T.C. Kimlik No:</Form.Label>
                        <Form.Control disabled={true} value={32132121} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control disabled={true} value={"dsasa@gmail.com"} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>İsim:</Form.Label>
                        <Form.Control value={1 } ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Soyad:</Form.Label>
                        <Form.Control value={1 } ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefon Numarası::</Form.Label>
                        <Form.Control value={1} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Yakın kişinin ismi:</Form.Label>
                        <Form.Control value={1} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Yakın kişinin telefon numarası:</Form.Label>
                        <Form.Control value={1} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>2. Yakın kişinin ismi:</Form.Label>
                        <Form.Control value={1} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>2. Yakın kişinin telefon numarası::</Form.Label>
                        <Form.Control value={1} ></Form.Control>
                    </Form.Group>
                </Card.Body>
            </Card>
        </>
    )
}
export default Profile;