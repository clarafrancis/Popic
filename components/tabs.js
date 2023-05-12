import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity } from "react-native"; 
// import { NavigationContainer } from "@react-navigation/native"; 
import { useNavigation } from '@react-navigation/native';


import HomePageScreen from '../screens/HomePageScreen';
import TipsScreen from '../screens/TipsScreen';
import GiftScreen from '../screens/GiftScreen';
import FriendsScreen from '../screens/FriendsScreen';
import ImagePicker from '../screens/ImagePicker';
import IconButtonSettings from './IconButtonSettings';
import IconButtonProfile from "./IconButtonProfile";



import {Entypo} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { MaterialIcons } from '@expo/vector-icons'; 

const Tab= createBottomTabNavigator();

const Tabs = ()=> {
    const navigation = useNavigation();
    return(
        <Tab.Navigator
            screenOptions={{
                headerRight:() => {
                    return <IconButtonProfile onPress={()=>navigation.navigate('Profile')}/>
                  },
                  headerLeft:() => {
                    return <IconButtonSettings onPress={()=>navigation.navigate('Paramètres')}/>
                  },
                headerTitleAlign: "center",
                // headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    // backgroundColor: 'transparent',
                    borderRadius: 100,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth:2,
                    borderTopWidth:2,
                    borderTopColor: '#4C7C4C',
                    borderColor: '#4C7C4C',
                    // padding: 10,
                    // paddingTop: 10,
                },
            }}
            >
            <Tab.Screen name="Tips" component ={TipsScreen} options={{tabBarIcon: ({size,focused, color}) => (<Entypo name="info" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="Accueil" component ={HomePageScreen} options={{tabBarIcon: ({size,focused, color}) => (<Entypo name="leaf" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="Camera" component ={ImagePicker} options={{tabBarIcon: ({size,focused,color}) =>(<MaterialCommunityIcons name="camera-iris" size={40} color={focused? "#4C7C4C" :"#4C7C4C"}/>)}}/>
            <Tab.Screen name="Points" component ={GiftScreen} options={{tabBarIcon: ({size,focused,color}) => (<Entypo name="trophy" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="Amis" component ={FriendsScreen} options={{tabBarIcon: ({size,focused,color}) => (<Ionicons name="people" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    tabIcons: {
        flex : 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        // marginTop: 20,
    },

})
