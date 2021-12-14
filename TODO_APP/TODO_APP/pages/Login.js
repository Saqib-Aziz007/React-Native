import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {home} from '../Constants/Constants';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (username === 'Saqib' && password === '123') {
      navigation.navigate(home, {username: username, password: password});
    } else {
      alert(`Set UserName = \'Saqib\' and Password = \'123\'`);
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'honeydew',
      }}>
      <View style={{backgroundColor: 'white', elevation: 5, padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text> UserName </Text>
          <TextInput
            onChangeText={setUsername}
            value={username}
            style={styles.input}></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text> Password </Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.input}></TextInput>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Button title="Login" onPress={() => onLogin()}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    margin: 10,
    borderRadius: 5,
    borderColor: 'dimgray',
    borderWidth: 1,
  },
});

export default Login;
