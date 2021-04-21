import React, { useState } from 'react';
import AddCity from './AddCIty/AddCity';
import s from './ChooseCity.module.css';
import Cities from './Cities/Cities'
const ChooseCity = (props) => {

    const [cities, addCity] = useState([]);

    const [visible, setVisible] = useState(false);

    const changeVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className={s.chooseCity}>
            <button disabled={visible} onClick={changeVisible} className={s.addCity}>
                <div>+</div>
            </button>
            <Cities />
            <AddCity visible={visible} changeVisible = {changeVisible} />
        </div>
    );
}

export default ChooseCity;