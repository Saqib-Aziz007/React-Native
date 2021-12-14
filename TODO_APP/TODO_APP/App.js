import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import {create, Edit, home, login} from './Constants/Constants';
import CreateTODO from './pages/CreateTODO';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={login}>
        <Stack.Screen name={home} component={Home} />
        <Stack.Screen name={login} component={Login} />
        <Stack.Screen name={create} component={CreateTODO} />
        <Stack.Screen name={Edit} component={CreateTODO} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
