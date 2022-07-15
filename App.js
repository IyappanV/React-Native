import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import AppScreen from './GuessANumber/AppScreen';
import MealsAppScreen from './MEALS/Screens/MealsAppScreen';
import MealsOverViewScreen from './MEALS/Screens/MealsOverViewScreen';
import MealDetailScreen from './MEALS/Screens/MealDetailScreen';
import FavouritesScreen from './MEALS/Screens/FavouritesScreen';
//import FavouritesContextProvider from './MEALS/Screens/Store/Context/FavouritesContext';
import {store} from './MEALS/Screens/Store/Redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={MealsAppScreen}
        options={{
          title: 'All Categories',
          headerTitleAlign: 'center',
          drawerIcon: ({color, size}) => (
            <Icon name="list" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          title: 'Favourite Screen',
          drawerIcon: ({color, size}) => (
            <Icon name="star" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    // <FavouritesContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppScreen"
            component={AppScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
          name="MealsAppScreen"
          component={MealsAppScreen}
          options={{
            title: 'All Categories',
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
            headerBackVisible: false,
          }}
        /> */}
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}
            options={{
              title: 'Meals View',
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}
          />
          <Stack.Screen
            name="FavouritesScreen"
            component={FavouritesScreen}
            options={{
              title: 'Favourites Screen',
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    //</FavouritesContextProvider>
  );
};

export default App;
