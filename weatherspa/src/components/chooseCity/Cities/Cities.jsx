import React, { useEffect } from 'react';
import s from './Cities.module.css';


const City = (props) => {
    return (
        <div className={s.citiesMainBlock}>
        {
                props.cities.map(el => 
                <div className={s.cityBlock}>
                    <div className={s.nameBlock}>
                            <h3 className={s.added_Name}>{el}</h3>
                    </div>
                    <div className={s.cityBtns}>
                    <button onClick={() => props.updateCity(el)}>Details</button>
                    <button className={s.deleteBtn} onClick={() => props.deleteCity(el)}>Delete</button>
                    </div>
                </div>
                )
        }
        </div>
    );
}

export default City;