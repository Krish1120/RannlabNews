import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  // Using Google signIn to enable user to signin using google account
  GoogleSignin.configure({
    webClientId:
      '376428115435-ncaumataansjnl90v83en7cs0o8t3jcr.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_signin = auth().signInWithCredential(googleCredential);
    user_signin
      .then(user => {
        console.log(user);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        testID="SignInButton"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          elevation: 2,
          padding: 10,
        }}
        onPress={() => {
          onGoogleButtonPress();
        }}>
        <Image
          style={{width: 20, height: 20, marginRight: 10}}
          source={require('../assets/Images/googleIcon.png')}
        />
        <Text style={{fontSize: 18}}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
