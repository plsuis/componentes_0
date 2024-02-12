/**
 * ESTE COMPOÑENTE NON ESTÁ A SER UTILIZADO
 */

import React,{useState,useEffect} from 'react';
import Lista from './Lista';

function Lista_0(props) {
    let [valor2,setValor2] = useState(['maza','tenedor','martillo'])
   

    const eventoDelete = ()=>{
        console.log('clico')
        valor2.push('uns valor')
        setValor2(valor2) 
    }
    useEffect(()=>{

    },[valor2])

    const lista = valor2.map((valor,index)=>{
        return <li onClick={eventoDelete} key={index}>{valor}</li>
    })
  return (<>
 
 <Lista lista={lista}></Lista>
  </>);
}

export default Lista_0;