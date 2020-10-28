import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking, Alert} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const AboutScreen = ({navigation}) => {

  return (
    <ScrollView>
      <Header/>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('https://gym-areth.joomla.com/')} title="Gymnasio Arethousas-Arethousa-Greece (coordinator)" color={'#00802B'}/>
      </View>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('https://www.sp8mikolow.edupage.org')} title="Szkola Podstawowa nr 8 im. Wojciecha Korfantego w Mikolowie-Mikolow-Poland" color='#00802B'/>
      </View>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('https://www.iesdomingoperezminik.es/wordpress/')} title="IES DOMINGO PEREZ MINIK-San cristobal de la Laguna-Tenerife-Spain" color='#00802B'/>
      </View>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('https://clg-eugenemona.ac-martinique.fr/wordpress/?ticket')} title="Collège Eugène MONA-Le Marigot-Martinique-France" color='#00802B'/>
      </View>

      <View style={{padding:20}}>
        <Button onPress={()=>Linking.openURL('http://www.iccarmagnolaprimo.edu.it/')} title="IC CARMAGNOLA I-Carmagnola-Italy" color='#00802B'/>
      </View>

      <Footer/>
    </ScrollView>)
}

export default AboutScreen;
