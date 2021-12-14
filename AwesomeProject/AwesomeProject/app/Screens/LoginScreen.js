import {assertPipelineBareFunction} from '@babel/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {Axios} from 'axios';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [isLoading, setisLoading] = useState(false);
  const getuserDetails = async () => {
    //await AsyncStorage.setItem('@user_token', 'Muhammad Saqib Token');
    const user_data = await AsyncStorage.getItem('@user_token');
    console.log(user_data);
    //setisLoading(true);
    // if (user_data !== null) {
    //   axios
    //     .get('https://api-nodejs-todolist.herokuapp.com/user/me')
    //     .then(res => res.data)
    //     .then(data => {
    //       setisLoading(false);
    //       navigation.navigate('Home', data);
    //     })
    //     .catch(e => console.log(e));
    // }
  };

  useEffect(() => {
    getuserDetails();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
          setisLoading(true);
          const data = axios
            .post(
              'https://api-nodejs-todolist.herokuapp.com/user/login',
              values,
            )
            .then(res => res.data)
            .then(data => {
              //console.log(data);
              setisLoading(false);

              navigation.navigate('Home', data);
            })
            .catch(e => console.warn(e));
        }}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.loginContainer}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <View style={{width: '100%', paddingHorizontal: 20}}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
              <View style={{width: '100%', paddingHorizontal: 20}}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.text}> Don't have an account? </Text>
                  <Text style={styles.registertext}> Register </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
              }}>
              <Text>SignIn With Google</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'indigo',
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  loginContainer: {
    backgroundColor: 'white',
    height: '60%',
    width: '90%',
    borderRadius: 25,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 70,
    backgroundColor: 'lightblue',
    borderRadius: 35,
    marginVertical: 5,
    paddingHorizontal: 30,
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'indigo',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: -10,
  },
  buttontext: {
    color: 'honeydew',
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  registertext: {
    color: 'gold',
    fontSize: 25,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
