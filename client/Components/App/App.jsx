import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import StarReviewsContainer from "../../containers/StarReviewsContainer.jsx";
import Homepage from "../Homepage/Homepage.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Link to="/test/reviews">Reviews</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviewsContainer} />
        {/* <Route to='/:product/:style' exact render={(props)=>{
          return <YOURCOMPONENTHERE someProp={props.something} />
        }} */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
