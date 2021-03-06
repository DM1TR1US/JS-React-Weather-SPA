import { weatherAPI } from "../../api/api";

const ADD_CITY = "ADD-CITY";
const DELETE_CITY = "DELETE-CITY";


let initialState = {
    cities: JSON.parse(localStorage.getItem('citiesArr')) || []
}

const choosedCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY: {
            let stateCopy = {...state};
            if(!stateCopy.cities.includes(action.data))
            {
                stateCopy.cities.push(action.data);
                localStorage.setItem('citiesArr', JSON.stringify(stateCopy.cities));
                return stateCopy;
            }
            else
            {
                return state;
            }
        }
        case DELETE_CITY: {
            let stateCopy = {...state};
            if(stateCopy.cities.includes(action.data))
            {
                stateCopy.cities = stateCopy.cities.filter(el => el !== action.data);
                localStorage.setItem('citiesArr', JSON.stringify(stateCopy.cities));
                return stateCopy;
            }
            else
            {
                return state;
            }
            
        }
        default:
            return state;
    }
}

export const addCity = (cityName) => {
    return{
        type: ADD_CITY, data: cityName
    }
}

export const deleteCity = (cityName) => {
    return{
        type: DELETE_CITY, data: cityName
    }
}
export default choosedCitiesReducer;
