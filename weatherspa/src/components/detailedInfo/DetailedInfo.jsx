import React, { useEffect, useState } from 'react';
import s from './DetailedInfo.module.css';
import { connect } from 'react-redux';
import Table from './Table/Table';
import { updateCity } from '../../redux/reducers/detailedReducer';

const DetailedInfo = (props) => {

    let [selectedCity, newCity] = useState("Please, choose the city");
    let [detailedInfo, updateDetails] = useState("undefined details");
    let [tempMin, updateMin] = useState(-100);
    let [tempMax, updateMax] = useState(100);
    let [iconId, updateIcon] = useState("03d");

    // useEffect(() => {
    //     newCity(props.cityName);
    //     updateDetails(props.detailedWeather);
    //     updateMin(props.tempMin);
    //     updateMax(props.tempMax);
    // }, [props.cityName] );

    useEffect(()=> {
        newCity(props.cityName);
        updateDetails(props.detailedWeather);
        updateMin(props.tempMin);
        updateMax(props.tempMax);
        updateIcon(props.iconId);
    }, [props.cityName]);

    useEffect(() => {
        updateDetails(props.detailedWeather);
    }, [props.detailedWeather]);

    useEffect(() => {
        updateMin(props.tempMin);
    }, [props.tempMin]);

    useEffect(() => {
        updateMax(props.tempMax);
    }, [props.tempMax]);

    useEffect(() => {
        updateIcon(props.iconId);
    }, [props.iconId]);

    return (
        <div className={s.choosedInfo}>
            <h1>{selectedCity}<img src= {`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt="weatherico"/></h1>
            <p className={s.weather_article}>{detailedInfo}</p>
            <p className={s.weather_tempRange}>{tempMin}-{tempMax} °C</p>
            <Table />
        </div>
    );
}

const mapStateToProps = (state) => ({
    cityName: state.detailedInfo.cityName,
    mainWeather: state.detailedInfo.mainWeather,
    detailedWeather: state.detailedInfo.detailedWeather,
    iconId: state.detailedInfo.iconId,
    tempMin: state.detailedInfo.tempMin,
    tempMax: state.detailedInfo.tempMax
})

export default connect(mapStateToProps, {updateCity})(DetailedInfo);