import React, {useEffect} from 'react';

import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {useDispatch, useSelector} from 'react-redux';
import UserList from '../common components/UserList';
import {UsersData} from '../Model/selector';
import {GET_USERS_INFO_REQUEST} from '../Model/user/actions';

const Home = () => {
  //const users = UsersData();
  // const {loading, error, users} = useSelector(UsersData);
  //
  // const dispatch = useDispatch();
  const loading = false;
  // console.log('screen:', users);
  //
  useEffect(() => {
    // dispatch({type: GET_USERS_INFO_REQUEST, payload: {}});
  }, []);
  //
  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.bartitle}>USERS</Text>
      </View>
      {/* <FlatList
        data={users}
        keyExtractor={user => user.id}
        renderItem={user => <UserList user={user} />}></FlatList> */}
      <ScrollView>
        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  appbar: {
    height: 50,
    backgroundColor: 'white',
    margin: 5,
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bartitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;
