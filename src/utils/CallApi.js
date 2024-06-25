import axios from "axios";
import { BASE_URL } from './constatnt'

const config={
    Headers:{
        "Content-Type":"application/json",
        "Accept":"pplication/json"
    }
}

const Callapi = async (resourse)=>{
    const {data} = await axios.get(`${BASE_URL}/${resourse}`, config)
    return data;
}   

export default Callapi