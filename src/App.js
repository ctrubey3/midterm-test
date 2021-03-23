import './App.css';
import Nav from "./components/core/Nav";
import All from "./components/core/All";
import Animation from "./components/core/Animation";
import Games from "./components/core/Games";
import Television from "./components/core/Television";
import Goku from "./components/Cards/Goku";
import Vegeta from "./components/Cards/Vegeta";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={All}/>
            <Route exact path={"/Animation"} component={Animation}/>
            <Route exact path={"/Games"} component={Games}/>
            <Route exact path={"/Television"} component={Television}/>
            <Route exact path={"/Goku"} component={Goku}/>
            <Route exact path={"/Vegeta"} component={Vegeta}/>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
