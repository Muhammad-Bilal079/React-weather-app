import { useState ,useEffect } from 'react'
import './weatherapp.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"



export const Weatherapp = () => {

let api_key ="aa1fda2f1d34ef2eb5a7b8bb101c7456"
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState('london');

useEffect(() => {
    fetchWeatherData(city); // Default city
   
}, []);

const fetchWeatherData = async (cityName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);

    console.log(weatherData);

};

    return (
        <>
            <div className='container'>
                <div className="topbar">
                    <input type="text" className='cityinput' placeholder='Search ' onChange={(e) => setCity(e.target.value)} />
                    <div className="searchicon" >
                        <img src={search_icon}  onClick={handleSubmit} alt="" />  
                        
                    </div>
                </div>

                <div className="weatherimage">
                    <img src={cloud_icon} alt="" />
                </div>

                <div className="weathertemp">{weatherData?.main?.temp || "0" }°C</div>

                <div className="weatherlocation">{weatherData?.name || "In valid City"}</div>

                <div className="datacontainer">
                    <div className="element">
                        <img src={humidity_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="humiditypercentage">
                                Humidity
                            </div>
                            <div className="text">{weatherData?.main?.humidity || 0}%</div>
                        </div>
                    </div>

                    <div className="element">
                        <img src={wind_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="humiditypercentage">
                                wind speed
                            </div>
                            <div className="text">{weatherData?.wind?.speed || 0} km/hr</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )





}
export default Weatherapp