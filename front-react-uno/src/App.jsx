import React from 'react';
import Saludo from './components/Saludo';
import Boton from './components/Boton';

function App() {
  

  return (
    <div>
      <h1>Mi primer proyecto en React</h1>
      <Saludo nombre="Daniel" />
      <Boton />
    </div>
  )
}

export default App
