import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../redux/reducers/choosedCitiesReducer';
import { updateCity } from '../../redux/reducers/detailedReducer';
import AddCity from './AddCIty/AddCity';
import s from './ChooseCity.module.css';
import Cities from './Cities/Cities'
const ChooseCity = (props) => {

    const [cities, setCities] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setCities(props.cities);
    }, [props.cities])

    const changeVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className={s.chooseCity}>
            <button disabled={visible} onClick={changeVisible} className={s.addCity}>
                <div>+</div>
            </button>
            <Cities updateCity={props.updateCity} cities = {cities}/>
            <AddCity addCity={props.addCity} visible={visible} changeVisible = {changeVisible} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    cities: state.choosedCities.cities
})

export default connect(mapStateToProps, {addCity, updateCity})(ChooseCity);