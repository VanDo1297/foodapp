import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from '../containers/Category';
import HomeScreen from '../containers/Home';
import DetailsScreen from '../containers/Details';
import IngredientScreen from '../containers/Ingredients';
import RecipeByIngredientScreen from '../containers/RecipeByIngredient';
import React from 'react';


const Stack = createStackNavigator();

function MainNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen name="Ingredient" component={IngredientScreen} />
            <Stack.Screen name='RecipeByIngerdient' component={RecipeByIngredientScreen} />
        </Stack.Navigator>
    )
}

function CategoriesStack(){
    return(
        <Stack.Navigator
            initialRouteName="Category"
        >
            <Stack.Screen name='Category' component={CategoriesScreen} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
    return(
        <Drawer.Navigator
            drawerPosition='left'
            initialRouteName='Main'
            drawerStyle={{
                width: 250
            }}
        >
            <Drawer.Screen name='Main' component={MainNavigator} />
            <Drawer.Screen name='Category' component={CategoriesStack} />
        </Drawer.Navigator>
    )
} 


function App() {
    return(
        <NavigationContainer>
            <DrawerStack/>
        </NavigationContainer>
    )
} 

export default App;