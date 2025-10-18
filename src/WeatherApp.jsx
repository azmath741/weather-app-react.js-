import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 23.45,
    humidity: 78,
    temp: 23.05,
    tempMax: 23.05,
    tempMin: 23.05,
    weather: "mist"
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }
  return (
    <div className='weather'>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}