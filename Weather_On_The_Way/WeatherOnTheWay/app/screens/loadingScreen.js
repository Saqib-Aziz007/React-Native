import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import useLocation from '../hooks/useLocation';
import networking from '../services/networking';
import getWeather from '../services/weatherServices';
import useWeather from '../services/weatherServices';

const LoadingScreen = () => {
  const _apiKey = 'a4703c88849076d59227e0da2752ae3b';
  const baseApi = 'https://api.openweathermap.org/data/2.5/weather?';
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState();
  useEffect(() => {
    if (location) {
      setLoading(true);
      console.log('1:', location);
      const weatherData = getWeather(
        `${baseApi}lat=${location?.latitude}&lon=${location?.longitude}&appid=${_apiKey}&units=metric`,
      );
      if (weatherData) setWeather(weatherData);
      setLoading(false);
    }
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.containerr}>{console.log('bbbbbb', weather)}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerr: {
    backgroundColor: 'gold',
    flex: 1,
  },
});

export default LoadingScreen;
