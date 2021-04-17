import React from "react";
import {useHistory } from "react-router-dom"

function OthersHelpRow(props) {

    const history = useHistory()

    const onClick = event => {

        history.push({
            pathname: '/help/meetotherhelp',
            helpKey: props.helpKey,
            helpItem: props.item
        })
    }

    return (
        <div className="help" onClick={onClick}>
            <h1 style={{color: "purple"}} >{props.item.currentDate}</h1>
            {props.item.helpList.map((item, index) => {
                return (
                    <h1 style={item.isProvided ? { color: "green" } : { color: "red" }}  key={index} >{(item.demandName)}</h1>
                    )
            })}
            <h1>Yardım talebinde bulunan: {props.item.isim}</h1>
        </div>
    );
}

export default OthersHelpRow;
