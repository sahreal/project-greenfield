import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import StarReviewsContainer from "../../containers/StarReviewsContainer.jsx";

import OverView from "../Overview/Overview.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer.jsx";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Link to="/test/reviews">Reviews</Link>
      <Link to="/test/overview">Overview</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/test/reviews" exact component={StarReviewsContainer} />
        <Route path="/test/overview" exact component={OverView} />
        <Route path="/test/questionanswer" exact component={QuestionAnswer} />

        <header className="header-container">
          <ul className="header-ul">
            <li className="header-li">
              <Link to="/">Home</Link>
            </li>
            <li className="header-li">
              <Link to="/test/reviews">Test</Link>
            </li>
            <li className="header-li">
              <Link to="/test/questionanswer">Question Answer</Link>
            </li>
          </ul>
        </header>

        {/* EXAMPLE ROUTE WITH PROPS 
        <SHOULD NOT NEED PROPS DUE TO USING REDUX> 

        <Route to='/:product/:style' exact render={(props)=>{

          return <YOURCOMPONENTHERE someProp={props.something} />
        }}

         END EXAMPLE ROUTE */}

        {/* THIS '/' PATH HAS TO BE THE LAST COMPONENT */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
