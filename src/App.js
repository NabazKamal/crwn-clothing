import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats page : {props.match.params.topicid}</h1>
    </div>
  );
};


function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/shop/hats"} component={HatsPage} />
        </Switch>
    </div>
  );
}
export default App;
