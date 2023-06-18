// import { View, Text } from "react-native";

// function RequestScreen() {
//     return (
//         <View>
//             <Text>You don't have any friends yet</Text>
//         </View>
//     );
// }

// export default RequestScreen; 

import { View, Text, StyleSheet, Image, FlatList, Pressable, Clipboard} from "react-native"; 
// import Clipboard from '@react-native-clipboard/clipboard';
import AddFriendsGridTile from "../components/AddFriendsGridTile.js"; 
import RequestGridTile from "../components/ReqGT.js";
// import { FlatList } from "react-native-gesture-handler";
import { ADDFRIENDS } from "../data/dataFRIENDS";
import { StatusBar } from "expo-status-bar"; 
// import {React} from "react"; 
import * as React from "react"
import { useState } from "react";
// import { SearchBar } from "react-native-elements"; 

import { Searchbar } from "react-native-paper";
import {AntDesign} from '@expo/vector-icons'


// const linkProfile = 'picyourpo.p.com' 
// const copyIt = () => Clipboard.setString(linkProfile) 
const topList = () => {
    return ( 
        <View style={{marginLeft: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>  Demandes d'amis </Text>
        </View>

    ); 
} 

function RequestScreen() {
    function renderAddFriendsItem(itemData){
        return <RequestGridTile pp={itemData.item.pp} username={itemData.item.username}/>};
        
    function HeaderButtonPressHandler() {
        console.log('Pressed')
    }

    // const [searchQuery, setSearchQuery] = React.useState( '' ) ;
    // const onChangeSearch = query => setSearchQuery( query ) ;
    
    
    return (
        <>
        <StatusBar style="light"/> 
        
        {/* <Searchbar 
        placeholder='Search' 
        onChangeText={onChangeSearch} 
        value={searchQuery} 
        style= {{backgroundColor: "#C9DCBD", margin: 16, 
        justifyContent: 'center'}}/> */}

    
        <FlatList 
        ListHeaderComponent={topList}
        data={ADDFRIENDS}
        keyExtractor={(item) => item.id}
        renderItem={renderAddFriendsItem}
        />
        </>
    );
    
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        margin: 16, 
        flexDirection: 'row', 
        // flexGrow: '20%', 
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#C9DCBD',
        backgroundColor: '#C9DCBD', 
        // height: 100, 
        // width: '100%', 
    }, 

    topLContainer: {
        flex : 1, 
        // textAlign: 'center', 
        // justifyContent: 'center', 
        // alignContent: 'center', 
        // alignItems: 'center', 
        // margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD', 
        // height: 200, 
        width: 90,  
    }, 

    topRContainer: {
        flex : 2, 
        flexDirection: 'column', 
        padding: 16, 
        // textAlign: 'center', 
        justifyContent: 'space-between'
        // alignContent: 'center', 
        // alignItems: 'center',
        // margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD', 
        // height: 200, 
        // width: '95%' 
    },

    leftContainer : {
        //   marginTop: 50,
        // flex: 1,
        flexDirection: 'row',
        padding: 10, 
        // textAlign: 'center', 
        alignItems: 'center'
    }, 

    bottomContainer: {
        flex : 2,
        margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD',
        // height: 200,
    }, 

        profilePic: {
            borderRadius: 100,
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: 'black',
            margin: 16,
          }, 

        url: {
            // backgroundColor: 'white', 
            color: '#4C7C4C', 
            padding: 2, 
            marginLeft: 2, 
            marginRight: 60, 
            // borderWidth: 2, 
            // borderRadius: 10, 
        }, 

        button: {
            borderRadius: 65, 
            backgroundColor: '#4C7C4C', 
            padding: 2, 
            height: 50, 
            width: 50, 
            alignItems: 'center', 
            justifyContent: 'center', 
        }, 
        // suggestion { 

        // }

})

export default RequestScreen;