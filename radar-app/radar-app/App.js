import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateDb from "./src/components/db/CreateDb";
import DashboardScreen from './src/components/screens/DashboardScreen';
import LoadingScreen from './src/components/screens/LoadingScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import LogIn from "./src/components/auth/Login";




export default function App() {
  const AppSwitchNavigator = createSwitchNavigator ({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen
  })

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )

  // if not auth, then login page


  // if auth, db page
  // return (
  //   <View style={styles.container}>
  //     <View><Text>Radar 2.0</Text></View>
  //     <CreateDb></CreateDb>
  //     {/* <Text>Hello World!</Text>
  //     <StatusBar style="auto" /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 50
  },
});
