import React from 'react'
import './App.css';
import Contador from './components/Contador';
import Cabecalho from './components/Cabecalho';
import {ContextProvider} from './components/Context';

function App() {
  return (
   <div>
    <ContextProvider>
      <Cabecalho/>
      <Contador/>
    </ContextProvider>
   </div>

   
  )
}

export default App;
