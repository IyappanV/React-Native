import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitles}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitles: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});

export default Subtitle;
