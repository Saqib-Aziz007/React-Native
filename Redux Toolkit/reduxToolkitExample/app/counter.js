import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNumber, decrement, increment, reset} from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => dispatch(increment())}></Button>
        <Button title="-" onPress={() => dispatch(decrement())}></Button>
        <Button title="reset" onPress={() => dispatch(reset())}></Button>
      </View>
      <Button title="Add 5 " onPress={() => dispatch(addNumber(5))}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Counter;
