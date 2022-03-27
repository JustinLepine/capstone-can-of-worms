import Dash from './components/Dash/Dash';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact from='/' to={Dash}/>
      </Switch>
    </Router>
  );
}

export default App;
