import Dash from "./components/Dash/Dash";
import Lures from "./components/Lures/Lures";
import Tackle from "./components/Tackle/Tackle";
import Rods from "./components/Rods/Rods";
import Crankbait from "./components/Crankbait/Crankbait";
import Gummies from "./components/Gummies/Gummies";
import Frog from "./components/Frog/Frog";
import Add from "./components/Add/Add";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Topwater from "./components/Topwater/Topwater";

function App() {
  return (
    <Router>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Dash} />
          <Route path="/lures" component={Lures} />
          <Route path="/tackle" component={Tackle} />
          <Route path="/rods" component={Rods} />
          <Route path="/crankbait" component={Crankbait} />
          <Route path="/softbait" component={Gummies} />
          <Route path="/topwater" component={Topwater} />
          <Route path="/frog" component={Frog} />
          <Route path="/add" component={Add} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
