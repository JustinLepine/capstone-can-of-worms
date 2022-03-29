import Dash from './components/Dash/Dash';
import Lures from './components/Lures/Lures';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Dash}/>
        <Route path='/lures' component={Lures}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
