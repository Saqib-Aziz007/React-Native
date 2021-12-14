import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';

const image = {
  uri: 'https://raw.githubusercontent.com/Saqib-Aziz007/Clima/master/images/city_background.jpg',
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
