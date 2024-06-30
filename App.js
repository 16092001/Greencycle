import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/Login';
import Recoverypage from './components/Recoverypage';
import Registerpage from './components/Registerpage';
import profilepage from './components/profilepage';
import InfoRecyclingPage from './components/InfoRecyclingPage';
import Addresspage from './components/Addresspage';
import Scanner from './components/Scanner';
import ScannerResult from './components/ScannerResult';
import DiscutionFAQ from './components/DiscutionFAQ';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recoverypage" component={Recoverypage} />
        <Stack.Screen name="Registerpage" component={Registerpage} />
        <Stack.Screen name="Profilepage" component={profilepage} />
        <Stack.Screen name="InfoRecyclingPage" component={InfoRecyclingPage} />
        <Stack.Screen name="Addresspage" component={Addresspage} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="ScannerResult" component={ScannerResult} />
        <Stack.Screen name="DiscutionFAQ" component={DiscutionFAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
