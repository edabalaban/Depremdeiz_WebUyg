import React, { useRef } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import app from "../firebase"
import { GetUserTcNo} from "../contexts/FirebaseDatabase"
import { useFirebaseDatabase } from "../contexts/FirebaseDatabase"
import { useAuth } from "../contexts/AuthContext"

var database = app.database();

function Profile() {

    const { getUserTcNo, tcNumber, currentUser } = useFirebaseDatabase()

    const nameRef = useRef();
    const surnameRef = useRef();
    const phoneRef = useRef();
    const firstRelativeNameRef = useRef();
    const firstRelativePhoneRef = useRef();
    const secondRelativeNameRef = useRef();
    const secondRelativePhoneRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()

        database.ref('Profil/' + tcNumber).set({
            tc_kimlikNo: tcNumber,
            email: currentUser.email,
            isim: nameRef.current.value,
            soyad: surnameRef.current.value,
            telefon_no: phoneRef.current.value,
            yakın_kisi_isim: firstRelativeNameRef.current.value,
            yakın_kisi_tel_no: firstRelativePhoneRef.current.value,
            ikinci_yakın_kisi_isim: secondRelativeNameRef.current.value,
            ikinci_yakın_kisi_tel_no: secondRelativePhoneRef.current.value,
            user_token: currentUser.user_token,
            user_uid: currentUser.user_uid
        });

        alert("Profil başarıyla güncellendi");
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profilim</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>T.C. Kimlik No:</Form.Label>
                            <Form.Control disabled={true} value={currentUser.tc_kimlikNo} ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control disabled={true} value={currentUser.email} ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>İsim:</Form.Label>
                            <Form.Control defaultValue={currentUser.isim} ref={nameRef} ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Soyad:</Form.Label>
                            <Form.Control defaultValue={currentUser.soyad} ref={surnameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefon Numarası:</Form.Label>
                            <Form.Control type="tel" defaultValue={currentUser.telefon_no}  ref={phoneRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>1. Yakın kişinin ismi:</Form.Label>
                            <Form.Control defaultValue={currentUser.yakın_kisi_isim} ref={firstRelativeNameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>1. Yakın kişinin telefon numarası:</Form.Label>
                            <Form.Control defaultValue={currentUser.yakın_kisi_tel_no} ref={firstRelativePhoneRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>2. Yakın kişinin ismi:</Form.Label>
                            <Form.Control defaultValue={currentUser.ikinci_yakın_kisi_isim} ref={secondRelativeNameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>2. Yakın kişinin telefon numarası:</Form.Label>
                            <Form.Control defaultValue={currentUser.ikinci_yakın_kisi_tel_no} ref={secondRelativePhoneRef}></Form.Control>
                        </Form.Group>
                        <Button className="w-100" type="submit">Güncelle</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
export default Profile;