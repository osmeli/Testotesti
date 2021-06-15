import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
      <Image resizeMode={"contain"} style={styles.image} source={require("./assets/logo.png")} />
      </View>
      <View style={styles.body}>
        <Text style={styles.navitext}><Button title='ADD SHOT' onPress={}></Button></Text>
        <Text style={styles.navitext}><Button title='MY CLUBS' onPress={}></Button></Text>
        <Text style={styles.navitext}><Button title='STATS' onPress={}></Button></Text>
      </View>
      
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
  body: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: -33,
    textAlign: 'center'
  },
  navitext: {
    fontWeight: 'bold',
    paddingVertical: 50,
    paddingHorizontal: 130,
    fontSize: 30,
    color: 'white'
  },
  image: {
    maxWidth: 400
  },
  image_mailat: {
    maxWidth: 400,
    maxHeight: 100
  }
});
