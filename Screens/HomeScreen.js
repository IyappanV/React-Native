import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const onPressGN = () => {
    navigation.navigate('AppScreen');
  };

  const onPressMeals = () => {
    navigation.navigate('Drawer');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={onPressGN}>
        <Text>Guess A Number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onPressMeals}>
        <Text>Meals</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  loginBtn: {
    backgroundColor: '#808080',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    color: 'white',
  },
});

export default HomeScreen;
