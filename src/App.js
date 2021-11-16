import React,{useState,useEffect} from "react";
import axios from "axios";
import Countryinfo from "./component/countryinfo";
import Weather from "./component/weather";
import Countrylist from "./component/countrylist";

function App() {
  const[countries,setCountries]=useState([]);
  const[searchName, setsearchName]=useState("");
  const[weather,setWeather]=useState({});
  
  const countriestoShow=countries.filter((country)=>
    country.name.official.toUpperCase().includes(searchName.toUpperCase())
  )

  const capital=countriestoShow.length===1 ? countriestoShow[0].capital[0] :undefined;
  
  const handleSearch=(e)=>{
    setsearchName(e.target.value)
  }

  const handleShow=(name)=>{
    setsearchName(name);
  }
  
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
      setCountries(res.data);
    })
  },[])

  useEffect(()=>{
    if(capital){
        axios.get( `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${capital}`)
        .then(res=>setWeather(res.data)
        )
    }
  },[capital])
    
  return (
    <div >
      <label>Find countries:</label>
      <input type="text" value={searchName} onChange={handleSearch}/><br/>
      { searchName &&  (countriestoShow.length > 10  
        ? <p>To many matches,please specify</p>
        :countriestoShow.length===1  && Object.keys(weather).length === 2
          ? <div>
            <Countryinfo country={countriestoShow[0]}/> 
            <Weather weather={weather}/>
            </div>
            : countriestoShow.map((country)=>
              <Countrylist key={country.name.common} country={country}  handleShow={handleShow} />
            )
      )}
    
    </div>
  );
}

export default App;

