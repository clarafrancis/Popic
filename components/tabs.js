import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity } from "react-native"; 
import { useNavigation } from '@react-navigation/native';

import LeaderboardScreen from "../screens/LeaderboardScreen";
import HomePageScreen from '../screens/HomePageScreen';
import TipsScreen from '../screens/TipsScreen';
import GiftScreen from '../screens/GiftScreen';
import FriendsScreen from '../screens/FriendsScreen';
import ImagePicker from '../screens/ImagePicker';
import IconButtonSettings from './IconButtonSettings';
import IconButtonProfile from "./IconButtonProfile";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Entypo} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

const Tab= createBottomTabNavigator();

const Tabs = ()=> {
    const navigation = useNavigation();
    return(
        <Tab.Navigator
        initialRouteName="PoPic"
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
                    // display: 'flex', 
                    flex: 1, 
                    // flexDirection: 'row',
                    bottom: '1%',
                    borderRadius: 100,
                    maxHeight: '6%',
                    maxWidth:'97%',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    borderWidth:2,
                    borderTopWidth:2,
                    borderTopColor: '#4C7C4C',
                    borderColor: '#4C7C4C', 
                    paddingTop: '2%',
                },
            }}
            >
            <Tab.Screen name="Information" component ={TipsScreen} options={{tabBarIcon: ({size,focused, color}) => (<Entypo name="info" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="Amis" component ={FriendsScreen} options={{tabBarIcon: ({size,focused,color}) => (<Ionicons name="people" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="PoPic" 
            component ={HomePageScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:'center'}}>
                        <Image
                        source={require('../assets/logoV2.png')}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40, 
                            marginBottom:'6%',
                        }}
                        />
                    </View>),
                    }}
                    />
            <Tab.Screen name="Classement" component ={LeaderboardScreen} options={{tabBarIcon: ({size,focused,color}) => (<Entypo name="trophy" size={24} color={focused? "#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>
            <Tab.Screen name="Points" component ={GiftScreen} options={{tabBarIcon: ({size,focused,color}) => (<MaterialCommunityIcons name="shopping" size={24} color={focused?"#4C7C4C" :'gray' } style={styles.tabIcons}/>)}}/>    
       </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    tabIcons: {
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 

    }
})
