import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const ProjectHymn = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        The Italian teachers and students composed our project’s
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://drive.google.com/file/d/1BxNXedmexLq2dS2upOIX-fxp0JP0Bdwo/view')}
          title="Listen to the Hymn"
          />
      </View>

      <Footer/>
    </ScrollView>
  )
}

export default ProjectHymn;
