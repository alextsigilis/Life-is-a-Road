import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import React-Native UI elements.
import {Text, Button, View, ScrollView, Linking} from 'react-native';

import Header from './header.js'
import Footer from './footer.js'

const Meetings = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>

      <View>
        <Text style={{padding:40, fontSize:18}}>
        During the 2 years period of the project there were 5 meetings:
        </Text>
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>navigation.navigate('Greece')}
          title="Meeting in Greece"
          color="green"
          />
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>navigation.navigate('Italy')}
          title="Meeting in Italy"
          color="green"
          />
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>navigation.navigate('Poland')}
          title="Meeting in Poland"
          color="green"
          />
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>navigation.navigate('Tenerife')}
          title="Meeting in Tenerife"
          color="green"
          />
      </View>

      <View style={{padding:20}}>
        <Button
          onPress={()=>navigation.navigate('Martinique')}
          title="Meeting in Martinique"
          color="green"
          />
      </View>

      <Footer/>
    </ScrollView>
  )
}


const Greece = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>
      <View>
        <Text style={{padding:10, fontSize:18, fontWeight:'bold'}}>
        The first meeting, "Breaking the Ice - Setting the keystone of the
        Road", took place in Arethousa, Thessaloniki, Macedonia, Greece
        from 25th of November to 2nd of December 2018. The tasks for
        this meeting were:
        </Text>
        <Text style={{padding:10, fontSize:18}}>
        To create and choose the Logo and the Mascot of the project, to
        prepare presentations about our schools and our cities, to make a
        research about historical and geographical data of our cities/regions,
        to take photos of Historical Remains and to propose 2 traditional
        recipes. All the results are uploaded in our Twinspace.
        During the meeting the greek school offered a traditional meal to all
        partners, teachers, students, parents and stakeholders
        </Text>
      </View>
      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/pages/page/462172')}
          title="Go to our Twinspace"
          />
      </View>
      <Footer/>
    </ScrollView>

  );
}

const Italy = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>
      <View>
        <Text style={{padding:10, fontSize:18, fontWeight:'bold'}}>
        The 2nd meeting of the project took place in the city of
        Carmagnola in Italy from 17 to 24 of March 2019.The tasks for
        this meeting were:
        </Text>
        <Text style={{padding:10, fontSize:18}}>
        To make a research about traditional customs about hospitality
        and create a video, to make a research about monuments of
        Cultural Heritage, to interview people and learn about jobs that
        do not exist or are about to extinct and to present famous roads
        of our countries.
        The project’s Hymn was first presented during the meeting and
        the Italian school offered a traditional dinner
        </Text>
      </View>
      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/pages/page/495433')}
          title="Go to our Twinspace"
          />
      </View>
      <Footer/>
    </ScrollView>

  );
}

const Poland = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>
      <View>
        <Text style={{padding:10, fontSize:18, fontWeight:'bold'}}>
        The 3rd meeting of the project took place in the city of
        Mikolow in Poland from 6 th -10 th May 2019. 2019.The tasks
        for this meeting were:
        </Text>
        <Text style={{padding:10, fontSize:18}}>
        To make a research on migration and refugees, now and then,
        from and to their country and on studies in Europe in the tourism
        sector and to make a video campaign to change perceptions and
        attitudes towards refugees and migrants
        </Text>
      </View>
      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/pages/page/495435')}
          title="Go to our Twinspace"
          />
      </View>
      <Footer/>
    </ScrollView>
  );
}

const Tenerife = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>
      <View>
        <Text style={{padding:10, fontSize:18, fontWeight:'bold'}}>
        The 4th meeting of the project took place in the city of La
        Laguna – Tenerife - Spain from 14th to 18th October 2019.
        2019.The tasks for this meeting were:
        </Text>
        <Text style={{padding:10, fontSize:18}}>
        To make a research on main statistics concerning Tourism and the
        laws, taxes and lodging regulations, to make a video about ECO
        tourism or alternative tourism in your city/region and a
        presentation about extreme leisure activities in your city/region
        All countries will choose 2 traditional games and will introduce
        them to the other countries.
        </Text>
      </View>
      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/pages/page/495434')}
          title="Go to our Twinspace"
          />
      </View>
      <Footer/>
    </ScrollView>
  );
};

const Martinique = ({navigation}) => {
  return (
    <ScrollView>
      <Header/>
      <View>
        <Text style={{padding:10, fontSize:18, fontWeight:'bold'}}>
        The 5th meeting of the project took place in the city of Le
        Marigot – Martinique – France from 17th to 21st February
        2020.The tasks for this meeting were:
        </Text>
        <Text style={{padding:10, fontSize:18}}>
        To make a research on jobs in the tourism sector in our region /
        country , to visit a company in the tourism sector in our
        city/region and present useful details about it, to create a
        virtual company in the tourism sector and to make a video of
        the students / host families / teachers giving highlights of the
        special moments of the project.
        </Text>
      </View>
      <View style={{padding:20}}>
        <Button
          onPress={()=>Linking.openURL('https://twinspace.etwinning.net/75325/pages/page/495436')}
          title="Go to our Twinspace"
          />
      </View>
      <Footer/>
    </ScrollView>
  );
};

export {Meetings, Greece, Italy, Poland, Tenerife, Martinique};
