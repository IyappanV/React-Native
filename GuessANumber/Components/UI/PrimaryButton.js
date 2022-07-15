import React from 'react';
import {View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';

// import Colors from '../Constants/colors';
import Colors from '../../Constants/colors';


function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <TouchableOpacity
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}> {children} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 15,
    margin: 4,
    // overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    marginVertical: 8,
    paddingHorizontal: 16,
    // elevation: 2,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
