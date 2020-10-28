import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const TravelGuide = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        Students from the 5 countries proposed their favorite places to visit.
        You can find descriptions, addresses and all information you need.
        Don’t miss them!
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('https://sites.google.com/site/teenstoteenstravelguide/home?authuser=0')} title="Teens to Teens Travel Guide" color='#00808B'/>
      </View>

      <Footer/>
    </ScrollView>)
}

export default TravelGuide;
