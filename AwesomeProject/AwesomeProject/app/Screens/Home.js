import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Home = ({route, navigation}) => {
  const data = route.params;
  const user = data?.user;
  const handleLogout = () => {
    axios
      .post('https://api-nodejs-todolist.herokuapp.com/user/logout')
      .catch(e => console.warn(e));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View
          style={{
            backgroundColor: 'gold',
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
          }}>
          <Text style={styles.title}>User Details</Text>
        </View>
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 20,
          }}>
          <Text style={styles.text}>Name = {user?.name}</Text>
          <Text style={styles.text}>Email = {user?.email}</Text>
          <Text style={styles.text}>Age = {user?.age}</Text>
        </View>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <View style={styles.logoutbutton}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
              }}>
              Logout
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'honeydew',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    backgroundColor: 'white',
    height: '50%',
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 25,
    elevation: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 25,
    color: 'indigo',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 0,
  },
  logoutbutton: {
    backgroundColor: 'indigo',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
