import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={ListingScreen} options={{ headerTitle: false }}/>
    </Stack.Navigator>
)

export default AuthNavigator;

