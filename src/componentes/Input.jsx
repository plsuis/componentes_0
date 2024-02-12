import React,{useState} from "react";

function Entrada(){
    const [boleano,setBooleano] = useState(false)
    const [firstName, setFirstName] = useState("escribe un valor");
    const [secondName, setSecondName] = useState("escribe outro valor");
    console.log('boleano ',boleano)
    return (<>
    {firstName !== '' && <p>Estás escribindo {firstName}.</p>}
    <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
         
        />
        <input
          value={secondName}
          onChange={e => setSecondName(e.target.value)}
         readOnly={boleano}
        />
        <button onClick={()=> setBooleano(!boleano)}>Cambiar valor</button>
    </>)
}

export default Entrada;