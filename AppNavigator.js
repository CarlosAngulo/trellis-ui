import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/components/Main';
import UploadPDF from './src/components/uploader/UploadPDF';
import Reader from './src/components/reader/Reader';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Upload PDF" component={UploadPDF} />
        <Stack.Screen name="Book Chat" component={Reader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
