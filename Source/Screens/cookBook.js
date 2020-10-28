import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const CookBook = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        Do you know a better way to get to know a country, than taste their
        traditional dishes? Check out our students’ favorite recipes
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://www.yumpu.com/en/document/read/64529123/life-is-a-road-lets-draw-it-together-erasmus-2018-20')}
          title="Taste of Home"
          color='#4F704F'/>
      </View>

      <Footer/>
    </ScrollView>
  )
}

export default CookBook;
