/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {arrowFunctionExpression} from '@babel/types';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text style={{fontSize: 50}}>{count}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            title="Increment"
            onPress={() => setCount(count + 1)}></Button>
          <Button
            title="Decrement"
            onPress={() =>
              count <= 0 ? setCount(0) : setCount(count - 1)
            }></Button>
          <Button title="reset" onPress={() => setCount(0)}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 45,
    width: 100,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default App;
