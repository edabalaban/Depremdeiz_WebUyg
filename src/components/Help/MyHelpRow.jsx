import React from "react";

function MyHelpRow(props) {
    return (
        <div className="help">
            <h1>{props.item.currentDate}</h1>
            {props.item.helpList.map((item, index) => {
                return <h1 key={index}>{JSON.stringify(item.demandName)}</h1>
            })}
            <div>
                {
                    props.item.isCompletelyProvided ? <h1>Tamamen Karşılandı></h1> : <h1>Karşılanmadı</h1>
                }
            </div>
            
        </div>
    );
}

export default MyHelpRow;
