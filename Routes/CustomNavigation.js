import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useRef, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from '../Views/SignIn';
import Home from '../Views/Home';
import DrawerContent from '../Components/DrawerContent';
const {height, width} = Dimensions.get('window');

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// navigation funtion to navigate through pages
export default function CustomNavigation({navigation, route}) {
  return (
    <Drawer.Navigator
      initialRouteName="SignIn"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#000',
        }}
      />
    </Drawer.Navigator>
  );
}
