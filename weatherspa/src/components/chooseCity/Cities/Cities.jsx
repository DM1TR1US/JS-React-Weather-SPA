import React, { useEffect } from 'react';
import s from './Cities.module.css';


const City = (props) => {

    return (
        <>
        {
                props.cities.map(el => 
                    <div className={s.cityBlock} onClick={() => props.updateCity(el)}>
                        <div>
                            <h3 className={s.added_Name}>{el}</h3>
                        </div>
                        <p className={s.added_Temperature}>17°C</p>
                    </div>
                )
        }
        </>
    );
}

export default City;