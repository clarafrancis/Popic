import { useState } from 'react';
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


import GiftScreen from './screens/GiftScreen';
import GiftDetailsScreen from './screens/GiftDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FriendsScreen from './screens/FriendsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomePageScreen from './screens/HomePageScreen';
import TipsScreen from './screens/TipsScreen';

const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator screenOptions={{
    drawerActiveBackgroundColor: "lightgray",
    drawerActiveTintColor: '#85C17E',
  }}>
    <Drawer.Screen 
    name="Po'Pic" 
    component={BottomTabNavigator} 
    options={{
      drawerIcon: ({color, size}) => <Entypo name="home" size={size} color={color} />
    }}/>

    <Drawer.Screen 
    name="Profil" 
    component={ProfileScreen} 
    options={{
      drawerIcon: ({color, size}) => <FontAwesome name="user" size={size} color={color} />
    }}/>

    <Drawer.Screen 
    name="Amis" 
    component={FriendsScreen}
    options={{
      drawerIcon: ({color, size}) => <FontAwesome name="users" size={size} color={color} />
    }}/>

  
    <Drawer.Screen 
    name="Paramètres" 
    component={SettingsScreen}
    options={{
      drawerIcon: ({color}) => <Ionicons name="settings" size={24} color={color} />
    }}/>

  </Drawer.Navigator>
  );
} 

function BottomTabNavigator() {
  return (
  <BottomTab.Navigator screenOptions={{
    drawerActiveBackgroundColor: "lightgray",
    drawerActiveTintColor: '#85C17E',
    headerShown: false,
  }}>
    <BottomTab.Screen 
    name="Tips Of The Day" 
    component={TipsScreen}/>

    <BottomTab.Screen 
    name="Accueil" 
    component={HomePageScreen} />

    <BottomTab.Screen 
    name="Tes Points" 
    component={GiftScreen} 
    />

    </BottomTab.Navigator>
  );
}

export default function App() {
    
    return (
      <>
              <NavigationContainer>
                <Stack.Navigator> 
                  <Stack.Screen name="Drawer" component={DrawerNavigator} options ={{headerShown: false}}/>
                  {/* <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{headerShown: false}}/> */}
                  <Stack.Screen name="Gift Details" component={GiftDetailsScreen}/>
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
