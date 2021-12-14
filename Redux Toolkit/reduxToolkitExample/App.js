import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import Counter from './app/counter';
import {store} from './app/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Text>Muhammad Saqib Aziz</Text>
        <Counter />
      </SafeAreaView>
    </ReduxProvider>
  );
};

export default App;
