import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../Constants/colors';

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
  },
});

export default Card;
