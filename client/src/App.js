import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home'
import Landing from './components/landing/landing.js';
import About from './components/About/about';
import Create from './components/Create/create';
import Details from './components/Details/detail.js'

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={Create} />
      <Route path="/detail/:id" render={({match}) => <Details id={match.params.id}/> } />
    </Switch>
    </>
  );
}

export default App;
