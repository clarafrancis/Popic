import { Pressable, View, Text, StyleSheet, Platform, Button, Alert, Image } from "react-native";

import {Entypo} from "@expo/vector-icons";

function AddFriendsGridTile ({pp, username}) {
        function HeaderButtonPressHandler() {
          console.log('Pressed')
      }

    <View style={styles.gridItem}>
        <View style={styles.container}>
            <Image source={{uri:pp}} style={styles.image}/>
            <Text style={styles.username}> {username} </Text>
            <Pressable style={styles.button} onPress={(HeaderButtonPressHandler)}>
                <Text> Add </Text>
            </Pressable>
            <Pressable onPress={HeaderButtonPressHandler}>
                <Text><Entypo name="cross" size={24} color={'#C9DCBD'}/></Text>
            </Pressable>
        </View>
    </View>
} 

export default AddFriendsGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        // marginBottom: 16, 
        // marginTop: 16,
        height: 50, 
        // borderRadius: 5,
        backgroundColor:'white',
        // shadowColor: 'black',
        // ShadowOpacity: 0.25,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 5,
        // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderWidth : 1,
        borderColor: 'black'
    }, 

    container: {
        flex: 1,
        flexDirection: 'row'
    },

    image: {
        width: '20%',
        height: '100%', 
        borderRadius: 100,
    }, 
    
    username: {
        fontWeight: 'bold',
        fontSize: 20
    }, 

    button: {
        width: 100, 
        height: '80%', 
    }

})