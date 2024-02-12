import React,{useState,useEffect} from 'react';
import { pedirDatos } from '../http/comunicacion';
import Lista_1 from './Lista_1';

function LerDatos() {
    let [datos,setDatos] = useState({})
    let [isBool,setBool] = useState(false)

   
    useEffect(()=>{
        const peticion = async ()=>{
            const endpoint = 'leodatos'
            const resposta = await pedirDatos(endpoint)
            console.log('en useEffect: ', resposta)
            setDatos(resposta)
        }
        peticion()
    },[isBool])

    
  return (<>
 
 <div>Lendo datos</div>
 <button onClick={()=> setBool(!isBool)}>Leo datos</button>
 {isBool && <Lista_1 datosback={datos} />}
  </>);
}

export default LerDatos;