import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import AppScreen from './GuessANumber/AppScreen';
import MealsAppScreen from './MEALS/Screens/MealsAppScreen';
import MealsOverViewScreen from './MEALS/Screens/MealsOverViewScreen';
import MealDetailScreen from './MEALS/Screens/MealDetailScreen';
import FavouritesScreen from './MEALS/Screens/FavouritesScreen';
import {store} from './MEALS/Screens/Store/Redux/store';
import {Provider} from 'react-redux';
import ManageExpenses from './Expenses/Screens/ManageExpenses';
import RecentExpenses from './Expenses/Screens/RecentExpenses';
import AllExpenses from './Expenses/Screens/AllExpenses';
import {GlobalStyles} from './Expenses/Constants/Styles';
import IconButton from './Expenses/Components/UI/IconButton';
import {ExpensesContextProvider} from './Expenses/Screens/Store/Expenses-Context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Icon name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

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
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white',
              title: 'Manage Expense',
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
