import React, {useEffect, useReducer} from 'react';
import {LogBox} from 'react-native';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {create, Edit} from '../Constants/Constants';
import ApiReducer from '../components/ApiReducer';

const initialState = {
  isLoading: true,
  payload: [],
};
const Home = ({route, navigation}) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'success', payload: data});
      });
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);

  const onTODOClick = todo => {
    navigation.navigate(Edit, {parentdispatch: dispatch, todo: todo});
  };
  return state.isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={{flex: 1, backgroundColor: 'honeydew', elevation: 2}}>
      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={state.todos}
          renderItem={({item, index}) => (
            <View style={Styles.FlatListContainer}>
              <View>
                <Text style={Styles.item}>{item.id}</Text>
              </View>
              <View style={{width: '80%', alignItems: 'flex-start'}}>
                <TouchableOpacity onPress={() => onTODOClick(item)}>
                  <Text style={Styles.item}>{item.title}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({type: 'delete', todoId: item.id});
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../assets/images/deleteicon.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}></FlatList>
        <View style={Styles.FAB}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(create, {
                parentdispatch: dispatch,
                todo: undefined,
              })
            }>
            <Image
              source={require('../assets/images/plus.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  FlatListContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 7,
    elevation: 2,
  },
  item: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    fontFamily: 'monospace',
    overflow: 'scroll',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  FAB: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    borderRadius: 30,
    bottom: 30,
    right: 40,
    height: 60,
    width: 60,
    padding: 15,
    elevation: 20,
  },
});

export default Home;
