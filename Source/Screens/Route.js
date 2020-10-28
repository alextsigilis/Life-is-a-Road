import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View} from 'react-native';
// Import all the Screens
import AboutScreen from './about.js';
import TravelGuide from './travelGuide.js'
import BestPactices from './bestPactices.js'
import ProjectHymn from './projectHymn.js'
import DigitalCalendar from './digitalCalendar.js'
import CookBook from './cookBook.js'
import {Meetings, Greece, Italy, Poland, Tenerife, Martinique} from './meetings.js'
import Twinspace from './twinspace.js'

// ----------------------------------------------------------------------------------
const Screens = [
  // About screen
  {
    name: "About",
    component: AboutScreen,
    options: {title: "Who we are", headerStyle:{backgroundColor: "#66B3FF"}, headerTintColor: '#fff'},
  },
  // Travel Guide
  {
    name: "TavelGuide",
    component: TravelGuide,
    options: {title: "Tavel Guide \"Teens to Teens\"", headerStyle:{backgroundColor: "#6AC73C"}, headerTintColor: '#fff'},
  },
  // Best Practices
  {
    name: "BestPactices",
    component: BestPactices,
    options: {title: "Best Practices", headerStyle:{backgroundColor: "#B284BE"}, headerTintColor: '#fff'},
  },
  // Project Hymn
  {
    name: "Project Hymn",
    component: ProjectHymn,
    options: {title: "Project Hymn", headerStyle:{backgroundColor: "#FFBF00"}, headerTintColor: '#fff'},
  },
  // Digital Callendar
  {
    name: "DigitalCalendar",
    component: DigitalCalendar,
    options: {title: 'Digital Callendar  \"4 Seasons in 5 Regions\"', headerStyle:{backgroundColor: "#3B7A57"}, headerTintColor: '#fff'},
  },
  // Cook Book
  {
    name: "CookBook",
    component: CookBook,
    options: {title: "Cook Book \"Taste of Home\"", headerStyle:{backgroundColor: "#FF7E00"}, headerTintColor: '#fff'},
  },
  // Meetings
  {
    name: "Meetings",
    component: Meetings,
    options: {title: "Meetings", headerStyle:{backgroundColor: "#841584"}, headerTintColor: '#fff'},
    meetings: [
      {name: 'Greece', component:Greece, options:{title: "Greece", headerStyle:{backgroundColor: "green"}, headerTintColor: '#fff'}},
      {name: 'Italy', component:Italy, options:{title: "Italy", headerStyle:{backgroundColor: "green"}, headerTintColor: '#fff'}},
      {name: 'Poland', component:Poland, options:{title: "Poland", headerStyle:{backgroundColor: "green"}, headerTintColor: '#fff'}},
      {name: 'Tenerife', component:Tenerife, options:{title: "Tenerife", headerStyle:{backgroundColor: "green"}, headerTintColor: '#fff'}},
      {name: 'Martinique', component:Martinique, options:{title: "Martinique", headerStyle:{backgroundColor: "green"}, headerTintColor: '#fff'}},
    ]
  },
  // Twinspace
  {
    name: "Twinspace",
    component: Twinspace,
    options: {title: "Twinspace", headerStyle:{backgroundColor: "#0048BA"}, headerTintColor: '#fff'},
  },

];


export default Screens;
