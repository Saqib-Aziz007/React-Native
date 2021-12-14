import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {getWeatherIcon} from '../constants/constants';
import useLocation from '../hooks/useLocation';

const _apiKey = 'a4703c88849076d59227e0da2752ae3b';
const baseApi = 'https://api.openweathermap.org/data/2.5/weather?';

const networking = location => {
  console.log(location);
  const [weatherData, setWeatherData] = useState();
  const weather = axios
    .get(
      `${baseApi}lat=${location.latitude}&lon=${location.longitude}&appid=${_apiKey}&units=metric`,
    )
    .then(res => res.data)
    .then(
      data => {
        console.log(data);
        setWeatherData({
          condition: data.weather[0].id,
          temp: data.main.temp,
          name: data.name,
        });
        //return data;
      },
      // setWeatherData({
      //   condition: data.weather[0].id,
      //   temp: data.main.temp,
      //   name: data.name,
      // }),
    );
  console.log('aaaaaaaaaaaaaaaa', weatherData);
  return weatherData;
};

export default networking;
