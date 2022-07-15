import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../Constants/colors'

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 4,
        // borderColor: Colors.accent500,
        padding: 20,
        margin: 20,
        // borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numbertext: {
      color: Colors.accent500,
      fontSize: 50,
      fontWeight: 'bold'
    }
});

export default NumberContainer;
