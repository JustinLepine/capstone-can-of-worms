import { Nav, Dash, InventoryPage, Add, Footer } from "./components/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DashList from "./components/Dash/DashList";
import "./App.scss";

function App() {
  const data = DashList;
  const maindash = data.filter((find) => find.category === 'maindash')
  const sublures = data.filter((find) => find.category === 'sublures')
  const subrods = data.filter((find) => find.category === 'subrods')
  const subtackle = data.filter((find) => find.category === 'subtackle')

  return (
    <Router>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <Dash maindash={maindash}/>
          </Route>
          <Route path="/lures">
            <Dash maindash={sublures}/>
          </Route>
          <Route path="/tackle">
            <Dash maindash={subtackle}/>
          </Route>
          <Route path="/rods">
            <Dash maindash={subrods}/>
          </Route>
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
