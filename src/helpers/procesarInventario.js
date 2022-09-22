import axios from 'axios'

//POST 
const insertInvenAxios = async(body) => {
    return axios.post(`http://localhost:8085/APIBudget/V1/inventarios`,body).then( r => r.data)
}

//Fachada
const insertInven = async(body) => {
    return await insertInvenAxios(body)
}

export default insertInven