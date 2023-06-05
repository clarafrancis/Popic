import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

import {Entypo} from "@expo/vector-icons"; 
import {Ionicons} from "@expo/vector-icons"; 

const ranking = '#2'
const numFriends = '15' 
const feuilles = '108'
function LeaderboardScreen() {
    return ( 
        <>
        <StatusBar style='light'/>
        <View style={styles.topContainer}>
            <Text style={{fontSize: 20}}> Your ranking today : </Text> 
            <Text style={{fontSize: 24, fontWeight:'bold', color: 'lightgrey', marginLeft: 5, marginRight: 5}}>{ranking}</Text>
            <Text style={{fontSize: 20}}>/{numFriends}</Text>
        </View> 
        <View style={styles.gain}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}> Feuilles gagnées aujourd'hui : {feuilles} <Entypo name="leaf" size={24} color="white"/></Text>
        </View> 

        {/* <View style={styles.podium}> 
            <View style={{height: 60, backgroundColor: '#C9DCBD'}}> </View> 
            
        </View> */}

        {/* <View style={ styles.podium}>
            <Text><Ionicons name={'podium-outline'} size={200}/></Text>
        </View> 
         */}

         <View style={styles.podium}>
            <View style={styles.second}>
                <View> 
                    
                </View> 
                <View>

                </View>
            </View> 
            <View style={styles.first}>
                <View>

                </View>
                <View>

                </View>
            
            </View> 
            <View style={styles.third}>
                <View>

                </View> 
                <View>

                </View>

            </View>
         </View>
        </>
    );
}

export default LeaderboardScreen; 

const styles = StyleSheet.create({
    topContainer: {
        padding: 10, 
        backgroundColor: 'white', 
        height: 60, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
    }, 

    gain: {
        backgroundColor: '#4C7C4C', 
        borderRadius: 10, 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 

    podium: { 
        flex: 3, 
        flexDirection: 'row', 
        height: 100, 
    }, 

    second:{
        flex: 2, 
        flexDirection: 'column'
    }, 
    first:{
        flex: 2, 
        flexDirection: 'column'
    }, 
    third:{
        flex: 2, 
        flexDirection: 'column'
    }

    // podium: {
    //     height: 200, 
    //     justifyContent: 'center', 
    //     alignItems: 'center', 
    // },


})