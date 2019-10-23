import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import StarReviews from "../Reviews/StarReviews.jsx";
<<<<<<< HEAD
import OverView from "../Overview/Overview.jsx";
=======
>>>>>>> staging
import Homepage from "../Homepage/Homepage.jsx";

const App = () => {
  return (
    <div className="app-container">
<<<<<<< HEAD
      <Link to="/test/reviews">Reviews</Link>
      <Link to="/test/overview">Overview</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviews} />
        <Route path="/test/overview" exact component={OverView} />
=======
      <Link to="/test/reviews">Test</Link>
      <Link to="git/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviews} />
>>>>>>> staging
        {/* <Route to='/:product/:style' exact render={(props)=>{
          return <YOURCOMPONENTHERE someProp={props.something} />
        }} */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
