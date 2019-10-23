import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import StarReviews from "../Reviews/StarReviews.jsx";

import OverView from "../Overview/Overview.jsx";

import Homepage from "../Homepage/Homepage.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Link to="/test/reviews">Reviews</Link>
      <Link to="/test/overview">Overview</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviews} />
        <Route path="/test/overview" exact component={OverView} />
        {/* <Route to='/:product/:style' exact render={(props)=>{
          return <YOURCOMPONENTHERE someProp={props.something} />
        }} */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
