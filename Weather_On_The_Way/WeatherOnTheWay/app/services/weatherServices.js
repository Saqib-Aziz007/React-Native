import axios from 'axios';
import {useEffect, useState} from 'react';
import useLocation from '../hooks/useLocation';

const _apiKey = 'a4703c88849076d59227e0da2752ae3b';
const baseApi = 'https://api.openweathermap.org/data/2.5/weather?';
const _apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=55.5&lon=37.5&appid=a4703c88849076d59227e0da2752ae3b`;

// if (location) {
//   setLoading(true);
//   axios
//     .get(
//       `${baseApi}lat=${location.latitude}&lon=${location.longitude}&appid=${_apiKey}&units=metric`,
//     )
//     .then(res => res.data)
//     .then(
//       data => (
//         setWeatherData({
//           condition: data.weather[0].id,
//           temp: data.main.temp,
//           name: data.name,
//         }),
//         setLoading(false)
//       ),
//     );
// } else {
//   console.log(location);
// }
// console.log('data', weatherData, loading);

const getWeather = apiurl => {
  console.log('2', apiurl);
  const weatherData = axios
    .get(apiurl)
    .then(res => res.data)
    .catch(error => console.log(error));
  console.log('3', weatherData);
  if (weatherData) {
    return weatherData;
  } else {
  }
};

export default getWeather;
