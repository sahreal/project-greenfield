import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import OverView from "../Overview/Overview.jsx";
//import Homepage from "../Homepage/Homepage.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Link to="/test/Overview">Overview</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/test/Overview" exact component={OverView} />
        {/* <Route to='/:product/:style' exact render={(props)=>{
          return <YOURCOMPONENTHERE someProp={props.something} />
        }} */}
        {/* <Route path="/" exact component={Homepage} /> */}
      </Switch>
    </div>
  );
};

export default App;
