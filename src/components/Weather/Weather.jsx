import React, { useState } from 'react'
const api = {
    key:"3678ce1eabef5143b937020ac7df6b43",
    base:'https://api.openweathermap.org/data/2.5/'};
const Weather = () => {
    const [search,setSearch] = useState("");
    const [weather,setWeather] = useState({});
const handleClick=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=> res.json())
    .then((result)=>{
        setWeather(result);
    })
}
  return (
    <>
    <h1>Weather app</h1>
    <input type='text' placeholder='Search....' onChange={(e)=> setSearch(e.target.value)}/>
    <button onClick={handleClick}>Search</button>
    {typeof weather.main != "undefined"?(
        <div>
    <p>{weather.name}</p>
    <p>{weather.main.temp}</p>
    <p>{weather.weather[0].main}</p>
     <p>{weather.weather[0].description}</p>  
     </div>
    ):("")}
    </>
  )
}

export default Weather