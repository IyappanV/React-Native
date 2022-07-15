import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import CategoriesScreen from './CategoriesScreen';

const MealsAppScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#351401" />
      <CategoriesScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default MealsAppScreen;
