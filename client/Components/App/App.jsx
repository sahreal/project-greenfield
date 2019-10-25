import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ReviewListContainer from "../../containers/ReviewListContainer.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import OverView from "../Overview/Overview.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer.jsx";

// import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* HEADER. LINKS GOES BELOW HERE */}
      <header className="header-container">
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/">Home</Link>
          </li>
          <li className="header-li">
            <Link to="/test/reviews">Reviews</Link>
          </li>
          <li className="header-li">
            <Link to="/test/overview">Overview</Link>
          </li>
          <li className="header-li">
            <Link to="/test/questionanswer">Question Answer</Link>
          </li>
        </ul>
      </header>
      {/* ROUTES GOES INSIDE HERE */}
      <Switch>
        <Route path="/test/reviews" exact component={Reviews} />
        <Route path="/test/overview" exact component={OverView} />
        <Route path="/test/questionanswer" exact component={QuestionAnswer} />

        {/* THIS '/' PATH HAS TO BE THE LAST COMPONENT */}
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
