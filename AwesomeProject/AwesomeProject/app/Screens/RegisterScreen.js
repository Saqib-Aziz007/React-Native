import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {Axios} from 'axios';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  const [isLoading, setisLoading] = useState(false);

  const setuserDetails = async values => {
    setisLoading(true);
    const userDetails = axios
      .post('https://api-nodejs-todolist.herokuapp.com/user/register', values)
      .then(res => res.data)
      .then(data => {
        setisLoading(false);
        console.log(data);
        return data;
      })
      .catch(e => {
        setisLoading(false);
        console.warn(e);
      })
      .finally(setisLoading(false));
    console.log(userDetails);
    // if (userDetails) {
    //   console.log(userDetails);
    //   await AsyncStorage.setItem('@user_token', userDetails.token);
    //   const data = await AsyncStorage.getItem('@user_token');
    //   console.log(data);
    //   Alert.alert('User Registered Successfully!!!');
    // }
  };

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          age: '',
        }}
        onSubmit={values => {
          console.log(values);

          setuserDetails(values);
        }}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Register</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={values.password}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
            />

            <TextInput
              style={styles.input}
              placeholder="Age"
              value={values.age}
              onChangeText={handleChange('age')}
            />
            <View style={{width: '100%', paddingHorizontal: 20}}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttontext}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}> Have an account? </Text>
                <Text style={styles.registertext}> Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterScreen;
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
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  loginContainer: {
    backgroundColor: 'white',
    height: '80%',
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
