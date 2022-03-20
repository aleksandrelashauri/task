// import './CurrentWeather.css';
import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import {API_KEY, API_MAIN_URL} from '../components/Config';

const CurrentWeather = ({search}) => {
    const [weather, setWeather]= useState({});
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
        if(!!search && search.trim().length > 0) {
            getData();
        }
    },[search]);
    const serializeWeather = (el)=> {
        return {
                city: el.name,
                temp: el.main.temp,
                feel: el.main.pressure,
                humidity: el.main.humidity,
                wind: el.wind.speed,
            }
        }
        const getData = () => {
            setLoading(true);
        fetch(`${API_MAIN_URL}weather?q=${search}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(weather => {
                setWeather(serializeWeather(weather));
            }).finally(()=> setLoading(false));
    }
    
    return (
        <div>
            <Loader isLoading={loading}>
            {(weather.hasOwnProperty('city') ) ? (
                <div>
                    <div className='city'> Results for City Name: {weather.city}</div>
                    <div className='cloud'>Temperature {weather.temp}°C</div>
                    <div className='humdew'>
                        <div className='humanity'> wind: {weather.wind} km/h</div>
                        <div className='dewpoint'>humidity {weather.humidity} </div>
                    </div>
                </div>
            ) : (' ')}
            </Loader>
        </div>
    );
};

export default CurrentWeather;