import React, {useLayoutEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {MEALS} from '../Data/dummy-data';
import MealDetail from '../Components/MealDetail';
import IconButton from '../Components/IconButton';

import Subtitle from '../Components/MealDetail/Subtitle';
import List from '../Components/MealDetail/List';
import { addFavourite, removeFavourite } from './Store/Redux/Favourites';
//import {FavouritesContext} from './Store/Context/FavouritesContext';

const MealDetailScreen = () => {
  //const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector(state => state.favouritemeals.ids);
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  //const mealsFavourite = favouriteMealsCtx.ids.includes(mealId);
  const mealsFavourite = favouriteMealIds.includes(mealId);

  function ChangeFavouriteStatusHandler() {
    if (mealsFavourite) {
      //favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({id: mealId}));
    } else {
      //favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={ChangeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, ChangeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
