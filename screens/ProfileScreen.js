import { View, Text, Image, StyleSheet, Pressable } from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
import {AuthStack} from "../App"
import LoginScreen from "./LoginScreen"; 
import NavigationContainer from "@react-navigation/native"; 
// import App from "../App"; 
import firebase from 'firebase/app';
// import 'firebase/auth'; 
// import 



function ProfileScreen() { 
    const navigation = useNavigation( ); 
        
      
    // const navigation = useNavigation(); 
    return ( 
        <>
        
        <View style={{flex:4}}>

        <View style={styles.ppContainer}> 
            <Image style={styles.profilePic}
            source={require('../assets/pp.jpg')}/> 
        </View> 
        <View style={{color: 'lightgrey', marginLeft: 10}}> 
            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Nom </Text> 
            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Prénom </Text>
        </View> 
        {/* <View  style={{flex:1}}> 
            <Text>Prénom </Text>
        </View>  */} 
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Pressable style={styles.button} onPress={console.log('pressed')}> 
        <Text style={{color: 'red'}}> Déconnexion </Text> 
        
        
        </Pressable>
        </View>
        </View>
        </>
    );
} 

export default ProfileScreen;

const styles = StyleSheet.create ( { 
    profilePic: { 
        borderRadius: 100, 
        width: 100, 
        height: 100, 
        borderColor: 'green', 
        borderWidth: 2, 
    }, 

    ppContainer: { 
        // flex: 1, 
        height: 150, 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center', 
        // marginTop: 10, 
    }, 
    button: { 
        // position: 'absolute', 
        height: 40, 
        width: '60%', 
        borderWidth: 2, 
        borderColor: '#4C7C4C', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 30, 
        backgroundColor: '#FFFFFF', 
        // alignContent: 'center', 
        // margin: 90, 
        // marginLeft: 50, 
        // marginRight: 50, 
        // padding: 10 

    }
})