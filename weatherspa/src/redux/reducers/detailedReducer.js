import { weatherAPI } from "../../api/api";

const UPDATE_CITY = "UPDATE-CITY";
const UPDATE_MAIN_WEATHER = "UPDATE-MAIN-WEATHER";
const UPDATE_DETAIL_WEATHER = "UPDATE-DETAIL-WEATHER";
const UPDATE_ICON = "UPDATE-ICON";
const TEMP_MIN = "TEMP-MIN";
const TEMP_MAX = "TEMP-MAX";


let initialState = {
    cityName: localStorage.getItem('selectedCity') || "Please, choose the city",
    mainWeather: "",
    detailedWeather: "",
    iconId: "04d",
    tempMin: 0,
    tempMax: 0
}

const detailedReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY: {
            return {
                ...state,
                ...action.data
            }
        }
        case UPDATE_MAIN_WEATHER: {
            return {
                ...state,
                mainWeather: action.value,
            }
        }
        case UPDATE_DETAIL_WEATHER: {
            return {
                ...state,
                detailedWeather: action.value,
            }
        }
        case UPDATE_ICON: {
            return {
                ...state,
                iconId: action.value,
            }
        }
        case TEMP_MIN: {
            return {
                ...state,
                iconId: action.value,
            }
        }
        case TEMP_MAX: {
            return {
                ...state,
                iconId: action.value,
            }
        }
        default:
            return state;
    }
}

export const setCity = (cityName, mainWeather, detailedWeather, iconId, tempMin, tempMax) => {
    return{
        type: UPDATE_CITY, data: {cityName, mainWeather, detailedWeather, iconId, tempMin, tempMax}
    }
}


export const updateCity = (cityName = localStorage.getItem('selectedCity')) => (dispatch) => {
    if(cityName !== localStorage.getItem('selectedCity')){
        localStorage.setItem('selectedCity', cityName);
    }

    weatherAPI.getWeather(cityName)
        .then(response => {
            let weather = response.weather[0];
            let temperature = response.main;

            let mainWeather = weather.main;
            let detailedWeather = weather.description;
            let iconId = weather.icon;
            let tempMin = temperature.temp_min;
            let tempMax = temperature.temp_max;

            dispatch(setCity(cityName, mainWeather, detailedWeather, iconId, tempMin, tempMax));
        })
}

export default detailedReducer;
