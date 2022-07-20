import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';

import {GlobalStyles} from '../../Constants/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={pressed => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
