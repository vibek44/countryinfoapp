const Countrylist=({country,handleShow})=>
  <li >{country.name.common}  
       <button onClick={()=>handleShow(country.name.official)}>show</button>
  </li>
    
     
   
export default Countrylist;