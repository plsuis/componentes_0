function FuncionClick() {
    let valor = 0;

    function modificarValor(){
        valor += 1;
        console.log('O valor é: ',valor)
    }
    
  return (<>
  <p>Valor é {valor}</p>
  <button onClick={modificarValor}>Varío o valor</button>
  
  </>);
}

export default FuncionClick;