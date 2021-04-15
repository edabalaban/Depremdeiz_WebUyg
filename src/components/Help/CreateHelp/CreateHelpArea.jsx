import React, { useState } from "react";

function CreateHelpArea(props){

    const [help, setHelp] = useState("");

    function handleChange(event) {
        setHelp(event.target.value);
    }

    function submitHelp(event) {
        props.onAdd(help);
        setHelp("");
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={help}
                    placeholder="Yardım istediğiniz malzemeyi yazın"
                />
                <button onClick={submitHelp}>Ekle</button>
            </form>
        </div>
    );
}


export default CreateHelpArea