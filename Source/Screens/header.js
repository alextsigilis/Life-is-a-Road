import * as React from 'react';
// Import React-Native UI elements.
import {Image, Text, Button, View} from 'react-native';


const Styles = {
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
  },

  img: {
    height: 60,
    width: 60,
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: "green"
  }

}

const Logo = require('./res/img/LOGOplus.jpg')
const IKY = require('./res/img/LogoIKY.png');

const Header = ({title}) => {
  return (
    <View style={Styles.view}>
      <Image source={Logo} style={Styles.img}/>
      <Text style={Styles.txt}>{title}</Text>
      <Image source={IKY} style={Styles.img}/>
    </View>
  );
}

export default Header;
