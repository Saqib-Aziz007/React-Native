import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({route, navigation}) => {
  const user = route.params;
  //console.log(user, user.email, route.params.email);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRiglht: () => (
  //       <TouchableOpacity onPress={() => handleLogout()}>
  //         <Text style={{color: 'black'}}>Logout</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {user.photo ? (
          <Image
            resizeMode="cover"
            source={{uri: user.photo}}
            style={styles.profileImage}
          />
        ) : (
          <Image
            source={require('./images/account.png')}
            style={styles.profileImage}
          />
        )}
      </View>
      <Text style={styles.text}>{user?.name}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'grey',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    //textAlign: 'center',
  },
  profileImage: {
    height: 200,
    width: 200,
  },
});

export default Home;
