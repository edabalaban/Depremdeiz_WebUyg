import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Help from "./Help";
import Profile from "./Profile";
import MapScreen from "./Map";
import Header from "./Header"
import OthersHelp from "./Help/OtherHelp"

function Home() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/help" component={Help} />
                    <Route path="/map" component={MapScreen} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    )
}
export default Home;