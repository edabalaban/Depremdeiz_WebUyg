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
            <h1>{props.helpKey}</h1>
            <h1>{props.item.currentDate}</h1>
            {props.item.helpList.map((item, index) => {
                return <h1 key={index} >{JSON.stringify(item.demandName)}</h1>
            })}
            <h1>Yardım talebinde bulunan: {props.item.isim}</h1>
            <div>
                {
                    props.item.isCompletelyProvided ? <h1>Tamamen Karşılandı></h1> : <h1>Karşılanmadı</h1>
                }
            </div>

        </div>
    );
}

export default OthersHelpRow;
