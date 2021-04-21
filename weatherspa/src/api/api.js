import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        appid: "dc851c430a7d7a7974d756b4b096ef91"
    }
})

export const weatherAPI = {
    getWeather(cityName) {
        return instance.get(`weather?q=${cityName}`)
            .then(response => response.data.weather[0]);
    },
    getCitiesList() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=dc851c430a7d7a7974d756b4b096ef91')
            .then(response => response);
    }
}

