import React, { useState } from 'react';
import s from './AddCity.module.css';


const AddCity = (props) => {

    const [cityName, setName] = useState("");

    const changeName = (e) => {
        setName(e.currentTarget.value);
    }
    // onClick={props.changeVisible}>
    return (
        <div>
        {props.visible && 
            <div className={s.modalAdd}>
                <input onChange={changeName}></input>

                <button onClick={props.changeVisible}>Cancel</button>
                <button onClick={props.changeVisible}>Add</button>
            </div>
        }
        </div>
    );
}

export default AddCity;