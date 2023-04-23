import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';

export default function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack></RootStack>
      </LogContextProvider>
    </NavigationContainer>
  );
}
