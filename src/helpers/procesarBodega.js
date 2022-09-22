import axios from 'axios'

//POST 
const insertBodegAxios = async(body) => {
    return axios.post(`http://localhost:8085/APIBudget/V1/bodegas`,body).then( r => r.data)
}

//Fachada
const insertBodeg = async(body) => {
    return await insertBodegAxios(body)
}

export default insertBodeg