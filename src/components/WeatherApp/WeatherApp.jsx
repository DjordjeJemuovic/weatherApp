import React from "react";
//CSS import
import "./WeatherApp.css";
//Images import
import search_icon from "../Asstes/search.png";
import clear_icon from "../Asstes/clear.png";
import cloud_icon from "../Asstes/cloud.png";
import drizzle_icon from "../Asstes/drizzle.png";
import humidity_icon from "../Asstes/humidity.png";
import rain_icon from "../Asstes/rain.png";
import snow_icon from "../Asstes/snow.png";
import wind_icon from "../Asstes/wind.png";

const WeatherApp = () => {
    let api_key = "7ca22695de65901c5c8b31ffac83b8f1";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-procent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature= document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = parseInt( data.main.temp)+"°c";
        location[0].innerHTML = data.name;
        let icon = document.getElementsByClassName("icon");
        
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="si" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-procent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">8 km/h </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
