import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const Twinspace = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        If you are interested to learn more about our project, you can visit our Official Twinspace
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/home')}
          title="Go to Twinspace"
          />
      </View>

      <Footer/>
    </ScrollView>
  )
}

export default Twinspace;
