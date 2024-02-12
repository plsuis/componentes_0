import React,{useState,useEffect} from 'react';
import './App.css';
import Toggle from './componentes/Toggle';
import ToggleConComponentes from './componentes/ToogleConComponentes';
import Entrada from './componentes/Input';
import FuncionClick from './componentes/FuncionClick';
import FuncionClickUseState from './componentes/FuncionClickUseState';
import Lista_0 from './componentes/Lista_0';
import LerDatos from './componentes/UseEffect_0';

function App() {
  return (
    <div className="App">
      <h2>Compoñentes con useState</h2>
      <div className='useState'>
        <h3>Funcion variando valor sen useState</h3>
        <FuncionClick />
        <h3>Funcion variando valor con useState</h3>
        <FuncionClickUseState />
        <h3>O input</h3>
        <Entrada />
        <h3>Toogle sen compoñentes</h3>
        <Toggle />
        <h3>Toogle con compoñentes</h3>
        <ToggleConComponentes />
      </div>
      <div>
        <h2>Compoñentes con useEffect</h2>
        <LerDatos></LerDatos>
      </div>
      
    </div>
  );
}

export default App;
