import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Image, Text, Button, View, ScrollView, Linking} from 'react-native';

import Screens from './Screens/Route.js'
import Header from './Screens/header.js'
import Footer from './Screens/footer.js'

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView>
        <Header title="Wellcom to our Project"/>
        <Text style={{padding:10}}>
        The application was created for the needs of the Erasmus + project
        “Life is a Road! Let’s draw it together!” 2018-20
        and contains the results of our work
        from Greece, Poland, Italy, Spain and France.
        </Text>
        {
          Screens.map(screen => (
            <View style={{padding:10}}>
              <Button  title={screen.options.title} onPress={ ()=> navigation.navigate(screen.name)} color={screen.options.headerStyle.backgroundColor} />
            </View>))
        }
        <View style={{padding:10}}>
          <Button
            title="GDPR"
            onPress={ ()=> Linking.openURL('https://www.gdprprivacypolicy.net/live.php?token=R9r4PPzbGUPO9eK5RUeeNc6CqFLXJNkQ')}
            color="#001433" />
        </View>
        <Footer/>
    </ScrollView>

  );
};

const main = {MainScreen:MainScreen, Screens:Screens};

export default main;
