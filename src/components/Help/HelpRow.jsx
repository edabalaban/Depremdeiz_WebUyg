import React from "react";


function HelpRow(props) {
    return (
        <div className="help">
            <h1>{props.item.currentDate}</h1>
            {props.item.helpList.map(item => {
                return <h1>{JSON.stringify(item.demandName)}</h1>
            })}
            <div>
                {
                    props.item.isCompletelyProvided ? <h1>Tamamen Karşılandı</h1> : <h1>Karşılanmadı</h1>
                }
            </div>
            
        </div>
    );
}

export default HelpRow;