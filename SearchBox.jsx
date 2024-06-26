import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city,setCity] = useState(" ");
    let[error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "79ac4fc83a387fe54acd7971aeb3d442";

   let getWeatherInfo = async( ) =>  
    {
      let response= 
       await 
            fetch(`${API_URL}?q=${city}&appid=${API_KEY}`
         );
      let jsonResponse=  await response.json();
      console.log(jsonResponse);
      let result = {
        city:city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feelsLike,
        weather : jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }
     

    
    
    
    
    let handleChange =(evt) =>{
        setCity(evt.target.value);
      }
      let handleSubmit = async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity(" ");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      }catch (error){
        setError(true);
      } }
    
      

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City-name" variant="outlined" required  value={city} onChange={handleChange} />
             <br></br>
             <br></br>
            <Button variant="outlined" type ="submit" >
            Search
            </Button>
            {error && <h5> no such place exists.</h5>}
            </form>
        </div>
    );
  }
