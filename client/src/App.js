import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.js'
import Landing from './components/landing/landing.js';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
    </Switch>
    </>
  );
}

export default App;
