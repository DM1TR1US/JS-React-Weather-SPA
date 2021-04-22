import React, { useState } from 'react';
import { weatherAPI } from '../../../api/api';
import s from './AddCity.module.css';


const AddCity = (props) => {

    const [cityName, setName] = useState("");

    const changeName = (e) => {
        setName(e.currentTarget.value);
    }

    const updateList = () => {
        if(cityName !== "" && weatherAPI.getCitiesList().includes(cityName)){
            props.addCity(cityName); 
            props.changeVisible(); 
        }else{
            alert(`Unfortunately, ${cityName} is not available. Try another one or check orthography.`)
        }
    }

    // onClick={props.changeVisible}>
    return (
        <div>
        {props.visible && 
            <div className={s.modalAdd}>
                <input onChange={changeName} list="citiesList"/>
                {
                    !weatherAPI.getCitiesList().includes(cityName) && cityName !== "" &&
                        <span className={s.notFound}>This value does not exist</span>
                }

                <button onClick={props.changeVisible}>Cancel</button>
                <button onClick={updateList}>Add</button>
            </div>
        }
        </div>
    );
}

export default AddCity;