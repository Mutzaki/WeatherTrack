//Imports consts and function that activate the app//
import React, {useState} from 'react'
import axios from 'axios'
import Cloud from './Cloud';

function App() {

const [data,setData] = useState({})
const [location,setLocation] = useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ff1170fc8f266f61d2103582715a7348`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

//Components Divs and inputs inclouding the data that we absorb from the API//
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={searchLocation}
        type="text"></input> 
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null} 
            <div className="cloud"> 
            <Cloud className="cloud-logo"></Cloud> 
            </div>
          </div>

          {data.name != undefined &&
            
<div className="bottom">
<div className="feels">
<p>Feels Like</p>
  {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
</div>
<div className="humidity">
<p>Humidity</p>
  {data.main ? <p className="bold">{data.main.humidity}%</p> : null}          
</div>
<div className="wind">
<p>Wind Speed</p>
  {data.wind ? <p className="bold">{data.wind.speed}Kph</p> : null}
</div>
</div>

          }


        </div>
       
      </div>
    </div>
  );
}


export default App;
