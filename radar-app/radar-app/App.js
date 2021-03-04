import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateDb from "./src/components/db/CreateDb";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Radar 2.0</Text>
      <CreateDb></CreateDb>
      {/* <Text>Hello World!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
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
