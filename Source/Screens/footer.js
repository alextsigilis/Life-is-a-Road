import * as React from 'react';
// Import React-Native UI elements.
import {Image, Text, Button, View, Linking} from 'react-native';


const Styles = {
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
  },

  img: {
    height: 30,
    width: 90,
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: "green"
  }

}

const CC = require('./res/img/by-nc-sa.png');
const EU = require('./res/img/EUFundinglogo.jpg')

const Footer = () => {
  return (
    <View style={Styles.view}>
      <Image source={CC} style={Styles.img}/>
      <Text style={{color:'blue', fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://github.com/alextsigilis/Life-is-a-Road')}>Source Code</Text>
      <Image source={EU} style={{height:30,width:130}}/>
    </View>
  );
}

export default Footer;
