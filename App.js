import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SSRProvider} from '@react-aria/ssr';
import {Alert, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import CustomNavigation from './Routes/CustomNavigation';

// https://radhika-user-app.herokuapp.com
export default function App() {
  const ignoreWarns = [
    'Setting a timer for a long period of time',
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
    'ViewPropTypes will be removed',
    'AsyncStorage has been extracted from react-native',
    'EventEmitter.removeListener',
  ];
  const warn = console.warn;
  console.warn = (...arg) => {
    for (let i = 0; i < ignoreWarns.length; i++) {
      if (arg[0].startsWith(ignoreWarns[i])) return;
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
  const Stack = createNativeStackNavigator();
  return (
    <SSRProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainNavigation">
          <Stack.Screen
            name="MainNavigation"
            component={CustomNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SSRProvider>
  );
}
