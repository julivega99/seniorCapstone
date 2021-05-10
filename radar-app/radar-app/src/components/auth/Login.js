import React, { useState, useContext, useEffect } from 'react';
import firebase from '../../firebase';
import { View, Text } from 'react-native';

var provider = new firebase.auth.GoogleAuthProvider();

const LogIn = ({navigation}) => {

        // [START auth_google_signin_popup]
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
    
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      // [END auth_google_signin_popup]
    return (
        <View><Text>Hello Login</Text></View>
    )
}

export default LogIn;