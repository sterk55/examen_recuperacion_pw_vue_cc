import axios from 'axios'

const buscarDatosTodos = () =>{
    const datos = axios.get(`http://localhost:8085/APIBudget/V1/productos/todos`).then(r=>r.data); 
    return datos
}
export const buscarTodosP = async () =>{
    return await buscarDatosTodos(); 
}


export default buscarTodosP;