import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p className={isOn ? 'encendido' : 'apagado'}>El estado actual es: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default Toggle;
