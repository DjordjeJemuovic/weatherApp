import React from "react";
//CSS import
import './WeatherApp.css';
//Images import
import search_icon from "../Asstes/search.png";
import clear_icon from "../Asstes/clear.png";
import cloud_icon from "../Asstes/cloud.png";
import drizzle_icon from "../Asstes/drizzle.png";
import humidity_icon from "../Asstes/humidity.png";
import rain_icon from "../Asstes/rain.png";
import snow_icon from "../Asstes/snow.png";
import wind_icon from "../Asstes/wind.png";



const WeatherApp = () =>{
return(
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search" />
            <div className="search-icon">
                <img src={search_icon} alt="si" />;
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon } alt="" />
        </div>
    </div>
)
}
export default WeatherApp;
