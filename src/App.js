import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar"
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Navbar />
        <Route pages={Home} path="/" />
        <Route exact path="/about" pages={About} />
        <Route pages={ContactPage} path="/contact" />
        <Route pages={Portfolio} path="/portfolio" />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
