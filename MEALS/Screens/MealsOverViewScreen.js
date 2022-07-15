import React, { useLayoutEffect } from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {MEALS, CATEGORIES} from '../Data/dummy-data';
import MealList from '../Components/MealList';

const MealsOverViewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catID,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);
  return <MealList items={displayedMeals}/>
};

export default MealsOverViewScreen;
