import { FlatList, StyleSheet, StatusBar, View, Text, Button, Image, Pressable, Alert } from "react-native";
import { GIFTS } from "../data/dataGIFT";
import GiftGridTile from "../components/GiftsGridTile";
import { useLayoutEffect } from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {FontAwesome5} from "@expo/vector-icons";
// import IconButton from '../components/IconButton';
import { Directions } from "react-native-gesture-handler";

import LeaderboardScreen from "./LeaderboardScreen";
import { GDETAILS } from "../data/dataGIFT";


function renderGiftItem(itemData) {
function PressHandler() {}
    return (
    <>
    <GiftGridTile task={itemData.item.task} points={itemData.item.points} onPress={PressHandler}/>;
    </>
    );
}


function GiftScreen({navigation}) {
    function renderGiftItem(itemData) {
        function PressHandler() {
            navigation.navigate("Gift Details", {
                giftId: itemData.item.id, 
            });
        }
        
        return <GiftGridTile task={itemData.item.task} points={itemData.item.points} onPress={PressHandler}/>;}
        
    return (
        <>
        <StatusBar style="light"/>
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={[styles.profilePic, styles.leftContainer]}
                source={require('../assets/pp.jpg')}/>
            <View>
                <View style={styles.rightContainer}>
                    <View style={styles.trightContainer}>
                        <Text style= {styles.topText}> Discounts </Text> 
                    </View>
                </View>
                
                <View style={styles.brightContainer} >
                    {/* <Text> Your points <FontAwesome5 name="crown" size={24} color="black" /> {"\n"} </Text> */}
                    <Text style={styles.topText}> Your points : </Text>
                    <Text style={styles.numPoints}> 35 <FontAwesome5 name="crown" size={35} color="black"/> </Text> 
                </View>
              </View>
            </View>

            <View style={styles.midContainer}>
                <Text style={styles.ProgressBarText}> Ta progression {"\n"} </Text>
                <ProgressBar progress={0.35} color={MD3Colors.error50}/>
                <Text >30</Text>
                <Text>100</Text>

            </View>
            {/* <View style={styles.bottomContainer}>
                <Text style={styles.midText}> WHAT'S NEW ! </Text>
            </View> */}
        </View>
      
        <FlatList
        data={GIFTS}
        keyExtractor={(item) => item.id}
        renderItem={renderGiftItem}
        />
        </>
    );
}

export default GiftScreen;

const styles = StyleSheet.create({
    container: {
        flex : 3,
        flexDirection: 'column',
        backgroundColor: '#fff',
        // borderWidth: 3,
    },

    topContainer: {
      flex: 1,
      marginTop: 20,
      marginBottom: 20,
      padding: 10,
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
    //   borderWidth: 3,
    },

    midContainer: {
        flex:1, 
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        padding: 10,
        // flexDirection: 'row',
        // marginLeft: 10,
        // marginRight: 10,
        borderWidth: 2,
        borderColor: '#44AFAB'
    }, 

    bottomContainer:{
        flex: 1,
        // margin: 50,
        backgroundColor: '#F0C63E',
        textAlign: 'center',
        alignItems: 'center', 
        padding: 10,
    },

    leftContainer : {
    //   marginTop: 50,
        flexDirection: 'row',
        padding: 10,
        textAlign: 'center',
        alignItems: 'center'
    },

    rightContainer : {
        //   marginTop: 50,
          flexDirection: 'column',
          padding: 10,
          textAlign: 'center',
          alignItems: 'center'
        },

    trightContainer : {
        //   marginTop: 50,
          flexDirection: 'row',
        //   padding: 10,
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: '#44AFAB',
          borderWidth: 3,
          borderRadius: 50,
          borderColor: '#44AFAB',
        },
 
    brightContainer : {
    //   marginTop: 50,
      flexDirection: 'row',
    //   padding: 10,
      textAlign: 'center',
      alignItems: 'center'
    },

    numPoints: {
        padding: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 35, 
        fontWeight: 'bold',
        color: "black",
      },
      
      topText: {
        padding: 5,
        // marginLeft: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 20, 
        color: "black",
      },

      ProgressBarText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 15, 
        color: "black",
      },

      profilePic: {
        borderRadius: 100,
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
      },

      midText: {
        padding: 10,
        // marginLeft: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 35,
        fontWeight: 'bold', 
        color: "black",
      },
});

