import { Pressable, View, Text, StyleSheet, Platform, Button, Alert, Image } from "react-native";

function AddFriendsGridTile ({pp, username}) {
    <View style={styles.gridItem}>
        <View>
            <Image source={{uri:pp}} style={styles.image}/>
            <Text> {username} </Text>
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

    image: {
        width: '20%',
        height: '100%', 
        borderRadius: 100,
    }, 
    
    // username: {

    // }

})