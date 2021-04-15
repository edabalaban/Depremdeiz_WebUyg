import React from "react";
import SignUp from "./SignUp";
import Home from "./Home"
import TCNumber from "./TcNumber"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Help from "./Help";
import Profile from "./Profile";
import MapScreen from "./Map";
import FirebaseDatabaseProvider from "../contexts/FirebaseDatabase";

function App(){
    return(
        <FirebaseDatabaseProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={SignUp} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/tcnumber" component={TCNumber} />
                </Switch>
            </Router>
        </FirebaseDatabaseProvider>
    )
}

export default App;
