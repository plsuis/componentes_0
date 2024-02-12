import React,{useState,useEffect} from 'react';
import Lista from './Lista';

function Lista_1(props) {
    const lista = props?.datosback.datos;
    
    
    const lista2 = lista.map((valor,index)=>{
        console.log('valor: ',valor)
        let datosPersoais;
        if(index != 0){
            datosPersoais = valor.nome + ' ' + valor.apelido1 + ' ' + valor.apelido2;
        }
        return <li>{datosPersoais}</li>
    })  
  return (<>
  <div>en lista de back</div>
    
  <Lista lista={lista2} />
  </>);
}

export default Lista_1;