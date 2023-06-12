import { View, Text, Image, StyleSheet, Pressable } from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
import {AuthStack} from "../App"
import LoginScreen from "./LoginScreen"; 
import NavigationContainer from "@react-navigation/native"; 
import App from "../App"; 
import firebase from 'firebase/app';
// import 'firebase/auth'; 
// import 



function ProfileScreen() { 
    const navigation = useNavigation( ); 
        
      
    // const navigation = useNavigation(); 
    return ( 
        <>
        
        <View style={{flex:4, flexDirection: 'column'}}>

        <View style={styles.ppContainer}> 
            <Image style={styles.profilePic}
            source={require('../assets/pp.jpg')}/> 
        </View> 
        <View > 
            <Text> Nom </Text> 
            <Text> Prénom </Text>
        </View> 
        {/* <View  style={{flex:1}}> 
            <Text>Prénom </Text>
        </View>  */} 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}> 
        <Text> Déconnexion </Text> 
        
        </Pressable>
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
        height: 50, 
        width: '60%', 
        borderWidth: 2, 
        borderColor: 'green', 
        justifyContent: 'center', 
        alignItems: 'center', 
        // alignContent: 'center', 
        // margin: 90, 
        // marginLeft: 50, 
        // marginRight: 50, 

    }
})