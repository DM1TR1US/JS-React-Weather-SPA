import React, { useState } from 'react';
import s from './AddCity.module.css';


const AddCity = (props) => {

    return (
        <div>
        {props.visible && 
            <div className={s.modalAdd}>
                Some content

                <button onClick={props.changeVisible}> Cancel </button>
            </div>
        }
        </div>
    );
}

export default AddCity;