import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Landing from './components/landing/landing.js';
import Create from './components/Create/create';
import Details from './components/Details/detail.js';
import React from 'react';

function App() {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route path="/detail/:id" render={({match}) => <Details id={match.params.id}/> } />

    </>
  );
}

export default App;
