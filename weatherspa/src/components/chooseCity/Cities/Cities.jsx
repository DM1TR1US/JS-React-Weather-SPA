import React from 'react';
import s from './Cities.module.css';


const City = (props) => {

    return (
            <div className={s.cityBlock}>
                <div>
                    <h3 className={s.added_Name}>Kharkiv</h3>
                </div>
                <p className={s.added_Temperature}>17°C</p>
            </div>
    );
}

export default City;