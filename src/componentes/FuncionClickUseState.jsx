import React,{useState} from 'react';

function FuncionClickUseState(props) {
    let [valor2,setValor2] = useState(0)
   
    function modificarValor2(){
        valor2 += 1
        setValor2(valor2) 
    }
  return (<>
  <p>Valor2 é: {valor2}</p>
  
  <button onClick={modificarValor2}>Varío o valor2</button>
  </>);
}

export default FuncionClickUseState;