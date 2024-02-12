import React, { useState } from 'react';
import Boton from './Boton';
import Parrafo from './Parrafo';

function ToggleConComponentes() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <Parrafo estado={isOn}/>
      <Boton estado={isOn} funcion={setIsOn}/>
    </div>
  );
}

export default ToggleConComponentes;
