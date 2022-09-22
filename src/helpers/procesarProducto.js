import axios from 'axios'

//POST 
const insertProductAxios = async(body) => {
    return axios.post(`http://localhost:8085/APIBudget/V1/productos`,body).then( r => r.data)
}

//Fachada
const insertProduct = async(body) => {
    return await insertProductAxios(body)
}

export default insertProduct