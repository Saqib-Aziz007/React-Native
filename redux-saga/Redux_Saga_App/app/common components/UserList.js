import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserList = ({user}) => {
  return (
    <View style={styles.listcontainer}>
      <View>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subtitle}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listcontainer: {
    backgroundColor: 'white',
    margin: 15,
    elevation: 3,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 15,
  },
});

export default UserList;
