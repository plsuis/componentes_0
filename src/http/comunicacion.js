const apiUrl = 'http://localhost:4000';


async function pedirDatos (endpoint){
    const respostaServer = await fetch(`${apiUrl}/${endpoint}`);
    const respostaJson = await respostaServer.json();
    return respostaJson
    
}

export {
    pedirDatos
}