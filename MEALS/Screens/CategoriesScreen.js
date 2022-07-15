import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CATEGORIES} from '../Data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridTile';

const CategoriesScreen = () => {

  const navigation = useNavigation();

  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate('MealsOverViewScreen', {
        categoryID: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
