import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image resizeMode={"contain"} style={styles.image} source={require("./assets/logo.png")} />
      <Text>What clubs do I Suck With?</Text>
      <Image resizeMode={"contain"} style={styles.image_mailat} source={require("./assets/mailat.jpg")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  image: {
    maxWidth: 400
  },
  image_mailat: {
    maxWidth: 400,
    maxHeight: 100
  }
});
