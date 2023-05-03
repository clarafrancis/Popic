import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button, SectionList, SafeAreaView, Image, StatusBar, Pressable, Modal, Views, Alert, ScrollView } from 'react-native';
// import AppContainer from "react-native-web/dist/exports/AppRegistry/AppContainer";
import {Entypo} from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons"; 
import {FontAwesome} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';

import GiftScreen from './screens/GiftScreen';
import GiftDetailsScreen from './screens/GiftDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FriendsScreen from './screens/FriendsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomePageScreen from './screens/HomePageScreen';
import TipsScreen from './screens/TipsScreen';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import IconButtonProfile from './components/IconButtonProfile';
import IconButtonSettings from './components/IconButtonSettings';

const Stack = createNativeStackNavigator(); 
const BottomTab = createBottomTabNavigator();
const {useLayoutEffect} = React;


function BottomTabNavigator({navigation, route}) {
  function HeaderButtonPressHandler() {
    console.log('Pressed')
}
  
  return (
  <BottomTab.Navigator 
  initialRouteName='Accueil'

  screenOptions={{
    drawerActiveBackgroundColor: "lightgray",
    drawerActiveTintColor: '#85C17E',
    tabBarActiveTintColor:'green',
    headerRight:() => {
      return <IconButtonProfile onPress={()=>navigation.navigate('Profile')}/>
    },
    headerLeft:() => {
      return <IconButtonSettings onPress={()=>navigation.navigate('Paramètres')}/>
    },
    
   
    // headerShown: false,
  }}>
    <BottomTab.Screen 
    name="Tips" 
    component={TipsScreen}
    options={{tabBarIcon: ({size,color}) => (<Entypo name="info" size={24} color="gray" />)}}/>

<BottomTab.Screen 
    name="Amis" 
    component={FriendsScreen} 
    options={{tabBarIcon: ({size,color}) => (<Ionicons name="people" size={24} color="gray" />)}}
    />

    <BottomTab.Screen 
    name="Po'Pic" 
    component={HomePageScreen} 
    options={{tabBarIcon: ({size,color}) => (<Entypo name="leaf" size={24} color="gray" />)}}/>

<BottomTab.Screen 
    name="Leaderboard" 
    component={LeaderboardScreen} 
    options={{tabBarIcon: ({size,color}) => (<Ionicons name="people" size={24} color="gray" />)}}
    />

    <BottomTab.Screen 
    name="Points" 
    component={GiftScreen} 
    options={{tabBarIcon: ({size,color}) => (<Entypo name="trophy" size={24} color="gray" />)}}
    />

    </BottomTab.Navigator>
  );
}



export default function App({navigation}) {
  
  function HeaderButtonPressHandler() {
    console.log('Pressed')
}
    return (
      <>
              <NavigationContainer>
             {/* <BottomTabNavigator/> */}
                <Stack.Navigator> 
                 
                  <Stack.Screen name ="Po'Pic" component={BottomTabNavigator} options={{
                    
                   headerShown: false,
                    
                  }}/>
                  
                  <Stack.Screen name="Gift Details" component={GiftDetailsScreen} />
                  <Stack.Screen name="Profile" component={ProfileScreen} />
                  <Stack.Screen name="Paramètres" component={SettingsScreen} options={{
                    gestureDirection:'horizontal-inverted'
                  }}/>

                </Stack.Navigator>
              </NavigationContainer>
        </>
    );

}



const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff',
    },
    appContainer: {
      flex: 1,
      marginBottom: 10,
      padding: 10,
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      
    },

    inputContainer : {
      marginTop: 50,
      flexDirection: 'column',
      padding: 10,
      textAlign: 'center',
      alignItems: 'center'
    },

  numPoints: {
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 35, 
    fontWeight: 'bold',
    color: '#85C17E',
  }
});
