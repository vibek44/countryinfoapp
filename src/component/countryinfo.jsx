const Countryinfo=({country})=><div>
    <h1>{country.name.common}</h1>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <h3>languages</h3>
    {(Object.values(country.languages)).map((el)=><li key={el}>{el}</li>)
     }
   <img src={country.flags.svg} alt="flag" width='100'/>
 </div >

export default Countryinfo;