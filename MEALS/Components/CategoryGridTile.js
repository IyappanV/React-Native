import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 1.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default CategoryGridTile;
