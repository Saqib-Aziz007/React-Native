import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {appbarimageurl} from '../Constants/Constants';

const AppBar = () => {
  return (
    <View style={styles.appbar}>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <Image style={{height: 30, width: 30}} source={appbarimageurl} />
      </TouchableOpacity>

      <Text style={styles.todotitle}>TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todotitle: {
    color: 'white',
    fontFamily: 'lucida grande',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 40,
  },
  appbar: {
    backgroundColor: 'blue',
    height: 70,
    padding: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default AppBar;
