import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Inicio from './Paginas/Inicio'
import Perfil from './Paginas/Perfil'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Inicio} />
      <Route path='perfil' component={Perfil}/>
    </Switch>
  );
}

export default App;
