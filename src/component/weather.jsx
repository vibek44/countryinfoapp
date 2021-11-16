const Weather=({weather})=>{
  return(
    <div>
     <p>temperatur°c</p>
     <h1>weather in {weather.location.name}</h1>
     <p>temperature {weather.current.temp_c}°c</p>
     <img src={weather.current.condition.icon} alt="current weather icon"/>
     <p>wind: {weather.current.wind_mph}mph direction {weather.current.wind_dir}</p>
    </div>
  )
}
   
 

export default Weather;