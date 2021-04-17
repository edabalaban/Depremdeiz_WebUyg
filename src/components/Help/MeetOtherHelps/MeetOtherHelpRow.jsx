import React from "react";
import { Form, Button, Card, Container } from 'react-bootstrap'

function MeetOtherHelpRow(props) {

    console.log(props);
    return (
        <div>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox" label={props.helpList.demandName}
                    id={`disabled-default-checkbox"}`}
                    checked={true}
                />
            </Form.Group>
        </div>
    );
}

export default MeetOtherHelpRow;
