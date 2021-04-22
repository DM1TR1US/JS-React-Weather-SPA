import * as axios from 'axios';
import data from '../localvalues/city.list.json';

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        // appid: "dc851c430a7d7a7974d756b4b096ef91",
        units: "metric"
    }
})

export const weatherAPI = {
    getWeather(cityName) {
        return instance.get(`weather?q=${cityName}`)
            .then(response => response.data);
    },
    getCitiesList() {
        let arr = [];
        if(data){
            data.forEach(element => {
               arr.push(element.name);
            });
        }
        return arr;
    }
}

