import axios from 'axios';

const BaseUrl = 'https://api.escuelajs.co/api/v1/';
export const GetAllProducts = async() => {
    const url = `${BaseUrl}products`;
    try{
        const {data} = await axios.get(url);
        return data;
    }catch(error){
        return error;
        console.log(error);
    }
}