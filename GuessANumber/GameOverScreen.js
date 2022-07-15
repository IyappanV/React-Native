import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import NumberContainer from './Components/Game/NumberContainer';
import Title from './Components/UI/Title';
import PrimaryButton from './Components/UI/PrimaryButton';
import Colors from './Constants/colors';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../Images/Success.jpg')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primary800,
    marginBottom: 24
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
