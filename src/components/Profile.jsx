import React, { useRef, useState } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import app, { auth } from "../firebase"
import { useFirebaseDatabase } from "../contexts/FirebaseDatabase"
import { useHistory } from "react-router-dom"

var database = app.database();

function Profile() {

    const { tcNumber, currentUser, getUserTcNo } = useFirebaseDatabase()

    const [myPhone, setMyPhone] = useState(currentUser.telefon_no);
    const [firstRelativePhone, setFirstRelativePhone] = useState(currentUser.yakın_kisi_tel_no);
    const [secondRelativePhone, setSecondRelativePhone] = useState(currentUser.ikinci_yakın_kisi_tel_no);

    const nameRef = useRef();
    const surnameRef = useRef();
    const phoneRef = useRef();
    const firstRelativeNameRef = useRef();
    const firstRelativePhoneRef = useRef();
    const secondRelativeNameRef = useRef();
    const secondRelativePhoneRef = useRef();

    const history = useHistory()

    function logOutClicked() {
        auth.signOut().then(() => {
            history.push('/signup')
        }).catch((error) => {
            console.log("error");
        });
    }

    function handleSubmit(e) {
        e.preventDefault()

        var userToken = currentUser.user_token
        if (currentUser.user_token == null) {
            userToken = ""
        }

        if (phoneRef.current.value.length == 15 && firstRelativePhoneRef.current.value.length == 15 && secondRelativePhoneRef.current.value.length == 15) {
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
                user_token: userToken,
                user_uid: currentUser.user_uid
            });

            getUserTcNo(currentUser.email)

            alert("Profil başarıyla güncellendi");
        }else{
            alert("Lütfen gerekli tüm telefon numarası alanlarını doldurun.");
        }

    }

    function handleChange(event) {

        if (event.target.name === "myPhone") {
            setMyPhone(event.target.value)
        } else if (event.target.name === "firstRelativePhone") {
            setFirstRelativePhone(event.target.value)
        } else if (event.target.name === "secondRelativePhone") {
            setSecondRelativePhone(event.target.value)
        }
    }

    function onKeyDown(event) {
        if (event.keyCode === 8) {
            //console.log('delete');
        } else {
            const phone = getFormattedPhoneNum(event.target.value)
            if (event.target.name === "myPhone") {
                setMyPhone(phone)
            } else if (event.target.name === "firstRelativePhone") {
                setFirstRelativePhone(phone)
            } else if (event.target.name === "secondRelativePhone") {
                setSecondRelativePhone(phone)
            }
        }
    }

    function getFormattedPhoneNum(input) {
        let output = "(";
        input.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,2})\D*(\d{0,1})/, function (match, g1, g2, g3, g4) {
            if (g1.length) {
                output += g1;
                if (g1.length == 3) {
                    output += ")";
                    if (g2.length) {
                        output += " " + g2;
                        if (g2.length == 3) {
                            output += " ";
                            if (g3.length) {
                                output += g3;
                                if (g4.length) {
                                    output += " " + g4
                                }
                            }
                        }
                    }
                }
            }
        }
        );
        return output;
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
                            <Form.Control onChange={handleChange} onKeyDown={onKeyDown} name="myPhone" type="tel" value={myPhone} ref={phoneRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>1. Yakın kişinin ismi:</Form.Label>
                            <Form.Control defaultValue={currentUser.yakın_kisi_isim} ref={firstRelativeNameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>1. Yakın kişinin telefon numarası:</Form.Label>
                            <Form.Control onChange={handleChange} onKeyDown={onKeyDown} name="firstRelativePhone" type="tel" value={firstRelativePhone} ref={firstRelativePhoneRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>2. Yakın kişinin ismi:</Form.Label>
                            <Form.Control defaultValue={currentUser.ikinci_yakın_kisi_isim} ref={secondRelativeNameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>2. Yakın kişinin telefon numarası:</Form.Label>
                            <Form.Control onChange={handleChange} onKeyDown={onKeyDown} name="secondRelativePhone" type="tel" value={secondRelativePhone} ref={secondRelativePhoneRef}></Form.Control>
                        </Form.Group>
                        <Button className="w-100" type="submit">Güncelle</Button>
                    </Form>
                </Card.Body>
                <div className="text-center mb-4">
                    <Button className="text-center mb-4" onClick={logOutClicked}>Çıkış Yap</Button>
                </div>>
            </Card>
        </>
    )
}
export default Profile;