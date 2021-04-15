import React, { useState, useEffect } from "react";
import app from "../firebase"
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MyHelps from "./Help/MyHelp"
import OthersHelp from "./Help/OtherHelp"
import HelpHeader from "./Help/HelpHeader"
import CreateHelp from "./Help/CreateHelp/CreateNewHelp"

var database = app.database();

function Help() {
        useEffect(() => {
        var starCountRef = database.ref('Help');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });

    });
    return (
        <div>
            <Router>
                <HelpHeader />
                <Switch>
                    <Route path="/help/myhelps" component={MyHelps} />
                    <Route path="/help/otherhelps" component={OthersHelp} />
                    <Route path="/help/createHelp" component={CreateHelp} />
                </Switch>
            </Router> 
        </div>
    )
}
export default Help;