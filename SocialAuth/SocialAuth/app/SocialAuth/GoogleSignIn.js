import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
const GoogleSignIn = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const checkUser = async () => {
    try {
      let user = await AsyncStorage.getItem('@user_token');
      if (user !== null) {
        user = JSON.parse(user);
        //console.log(user, user.email);
        navigation.navigate('Home', user);
      } else {
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure();
    checkUser();
  }, []);

  const signIn = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      AsyncStorage.setItem('@user_token', JSON.stringify(userInfo.user));
      setIsLoading(false);
      navigation.navigate('Home', userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
        setIsLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
        setIsLoading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
        setIsLoading(false);
      } else {
        // some other error happened
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <Button title="SignIn with Google" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
});

export default GoogleSignIn;
