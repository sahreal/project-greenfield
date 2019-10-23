import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import StarReviews from "../Reviews/StarReviews.jsx";
import Homepage from "../Homepage/Homepage.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Link to="/test/reviews">Test</Link>
      <Link to="git/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviews} />
        {/* <Route to='/:product/:style' exact render={(props)=>{
          return <YOURCOMPONENTHERE someProp={props.something} />
        }} */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
