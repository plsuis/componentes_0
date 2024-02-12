import React from 'react';

function Boton(props) {
  return <button className={props.estado ? 'encendido' : 'apagado'} onClick={() => props.funcion(!props.estado)}>Boton con props</button>;
}

export default Boton;