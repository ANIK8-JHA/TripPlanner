import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InfoScreen from './screens/InfoScreen';
import SuccessScreen from './screens/SuccessScreen';
 
const Stack = createNativeStackNavigator();
 
const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{title: 'Trip Planner'}}
      />
      <Stack.Screen
        name='Info'
        component={InfoScreen}
        options={{title: 'Details'}}
      />
      <Stack.Screen
        name='Success'
        component={SuccessScreen}
        options={{title: 'Success'}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
 
 
export default App;