import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../Constants/colors'

function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: Colors.primary800,
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4
    },
    itemText: {
      color: Colors.primary800,
    }
});

export default GuessLogItem;
