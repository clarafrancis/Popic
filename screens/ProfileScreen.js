import { View, Text, Image, StyleSheet, Pressable } from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
// import {AuthStack} from "../App" 
// import LoginScreen from "./LoginScreen"; 
import NavigationContainer from "@react-navigation/native"; 
// import firebase from 'firebase/app';
// import 'firebase/auth'; 
// import 
import {Entypo} from "@expo/vector-icons"; 

const points = 35; 
const amis = 15; 

function ProfileScreen() { 
    const navigation = useNavigation( ); 
        
      
    // const navigation = useNavigation(); 
    return ( 
        <>
        
        <View style={{flex:4}}>
        <View style={{backgroundColor: '#FFFFFF', height: 50, justifyContent: 'center', alignItems: 'flex-end'}}> 
            <Text> username </Text>
        </View> 
        <View style={styles.ppContainer}> 
            <Image style={styles.profilePic}
            source={require('../assets/pp.jpg')}/> 
            {/* <Text style={{margin: 10, fontSize: 18}}> {points} </Text>  */} 
            <View style={{flexDirection: 'column', margin: 30, zIndex: 1, marginTop: -50}}>
            <Text style={{fontSize : 30, color : '#4C7C4C'}}> {points} <Entypo name="leaf" size={30} color="#4C7C4C"/> </Text> 
            <Text style={{fontSize : 30, color : '#4C7C4C'}}> {amis} amis </Text> 

            </View>

        </View> 
        <View style={{color: 'lightgrey', marginLeft: 10, backgroundColor: '#C9DCBD', flexDirection: 'column'}}> 
            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Tes Infos :  </Text> 
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Nom complet : </Text> 
                <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Age  : </Text> 
            </View>
            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}> Email : </Text> 
            

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
        width: 200, 
        height: 200, 
        borderColor: 'green', 
        borderWidth: 5, 
        marginTop: -50, 
        zIndex: 1 
    }, 

    ppContainer: { 
        // flex: 1, 
        height: 150, 
        // justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center', 
        margin: 15, 
        flexDirection: 'row', 
        // zIndex: 1, 
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