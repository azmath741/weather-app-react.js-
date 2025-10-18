import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "915bd85b9a00ce3c79378be62f13904c";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      }
      console.log(result)
      return result;
    } catch (err) {
      throw err;
    }
  }
  let handleChange = (e) => {
    setCity(e.target.value);
  }

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className='searchBox'>
      <h2>Search For Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField className="city" id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br></br><br></br>
        <Button className="btn" variant="contained" type='submit'>
          Send
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exists</p>}
    </div>
  );
}