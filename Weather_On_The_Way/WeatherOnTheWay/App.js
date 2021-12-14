import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import LoadingScreen from './app/screens/loadingScreen';

const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
