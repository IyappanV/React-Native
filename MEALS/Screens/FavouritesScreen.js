import React, {useLayoutEffect, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MEALS} from '../Data/dummy-data';
//import {FavouritesContext} from './Store/Context/FavouritesContext';
import MealList from '../Components/MealList';
import {useSelector} from 'react-redux';

const FavouritesScreen = () => {
  //const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector(state => state.favouritemeals.ids);
  const favouriteMeals = MEALS.filter(meal =>
    //favouriteMealsCtx.ids.includes(meal.id),
    favouriteMealIds.includes(meal.id),
  );

  if (favouriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouritesScreen;
