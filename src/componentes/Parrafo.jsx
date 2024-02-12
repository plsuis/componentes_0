function Parrafo(props) {

  return (
    <div>
      <p className={props.estado ? 'encendido' : 'apagado'}>El estado actual es: {props.estado ? 'Encendido' : 'Apagado'}</p>
    </div>
  );
}

export default Parrafo;