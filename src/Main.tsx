import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      {/* <Text>Hola Mundo</Text> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
