import { Nav, Dash, Lures, Tackle, InventoryPage, Rods, Add, Footer } from "./components/index"
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
          <Route path="/crankbait">
            <InventoryPage category={0}/>
          </Route>
          <Route path="/frog">
            <InventoryPage category={1}/>
          </Route>
          <Route path="/topwater">
            <InventoryPage category={2}/>
          </Route>
          <Route path="/softbait">
            <InventoryPage category={3}/>
          </Route>
          <Route path="/add" component={Add} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
