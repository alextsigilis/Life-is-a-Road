import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, Alert,Image} from 'react-native';
// Import screens
import main from './mainScreen.js'


// The color themes of the app
const Theme = {
  dark: false,
  colors: {
    card: 'white',
    background: '#CCE6FF',
  },
};

const MainScreen = main.MainScreen;
var Screens = main.Screens;

const Stack = createStackNavigator();


const MyStack = () => {

  const meetingScreens = Screens.find( s => {
    if(s.name=='Meetings'){
      return s.meetings;
    }
  });

  //Screens = [].concat(Screens, meetingScreens);

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen name={"MainScreen"} component={MainScreen} options={{ title: 'Life is a Road! Lets draw it together!' }} />
        {
            Screens.map(item => ( <Stack.Screen name={item.name} component={item.component} options={item.options} /> ) )
        }
        {
          Screens.find(s => s.name=='Meetings').meetings.map(meeting => (<Stack.Screen name={meeting.name} component={meeting.component} options={meeting.options} />) )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack;
