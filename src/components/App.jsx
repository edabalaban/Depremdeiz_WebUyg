import React from "react";
import SignUp from "./SignUp";
import Home from "./Home"
import TCNumber from "./TcNumber"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FirebaseDatabaseProvider from "../contexts/FirebaseDatabase";
import Help from "./Help";

function App(){
    return(
        <FirebaseDatabaseProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={SignUp} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/tcnumber" component={TCNumber} />
                    <Route path="/help" component={Help} />
                </Switch>
            </Router>
        </FirebaseDatabaseProvider>
    )
}

export default App;