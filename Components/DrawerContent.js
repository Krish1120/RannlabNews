import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

export default function DrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: height / 2,
          }}>
          <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
            WELCOME
          </Text>
          <Text style={{fontSize: 24, fontWeight: '600', color: 'black'}}>
            TO NEWS APP
          </Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
