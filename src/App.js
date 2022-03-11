import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from "./Components/Todo";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/todo" exact>
          <Todo />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
