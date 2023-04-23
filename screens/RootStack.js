import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}></Stack.Screen>
      {/* 이렇게 하지 않으면 헤더 2개 중첩. */}
    </Stack.Navigator>
  );
}
