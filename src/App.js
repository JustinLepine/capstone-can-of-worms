import { Nav, Dash, Lures, Tackle, Rods, Crankbait, Gummies, Frog, Add, Topwater, Footer } from "./components/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

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
