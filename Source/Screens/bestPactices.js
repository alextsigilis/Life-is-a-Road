import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const BestPactices = ({navigation}) => {

  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        A teacher’s useful tool. Feel free to take ideas and use them to enrich lessons and projects
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://drive.google.com/file/d/10l-YGnpzdLL4AqJw5h8jof34SYDbATrv/view')}
          title="Best Pactices Guide - Life is a Road"
          color='#00608D'/>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://drive.google.com/file/d/1tUhxa-Nt9amV9fvMN1r8MOU9fg-wagF_/view')}
          title="Best Pactices - Life is a Road"
          color='#00808A'/>
      </View>

      <Footer/>
    </ScrollView>
  )
}

export default BestPactices;
