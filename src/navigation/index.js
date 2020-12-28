import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContainer from './drawer';
import HomeScreen from '../containers/Home';
import React from 'react';

const Stack = createStackNavigator();

function MainNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen name='Home' component={HomeScreen} />
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