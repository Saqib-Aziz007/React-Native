import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoogleSignIn from './app/SocialAuth/GoogleSignIn';
import Home from './app/Home';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
//
const App = () => {
  //
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={GoogleSignIn} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => {
              const navigation = useNavigation();

              return (
                <Button
                  title="Logout"
                  onPress={async () => {
                    try {
                      await AsyncStorage.removeItem('@user_token').then(() =>
                        console.log('item removed'),
                      );
                      navigation.navigate('SignIn');
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
