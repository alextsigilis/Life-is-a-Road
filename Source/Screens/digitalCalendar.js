import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const DigitalCalendar = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View style={{padding:20}}>
        <Button title="Part-I" onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=nCKe2Svz7Wo&feature=youtu.be')}/>
      </View>

      <View style={{padding:20}}>
        <Button title="Part-II" onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=0iy8dlTI4Pk&feature=youtu.be')}/>
      </View>

      <Footer/>
    </ScrollView>)
}

export default DigitalCalendar;
