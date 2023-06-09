import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import {StyleSheet, FlatList, Alert, Pressable, Modal, Text, Image, View, Button, ImageBackground} from 'react-native';
import IdentifientsGrid from '../components/IdentifientsGrid';
import { IDENTIFIANTS } from '../data/id'; 
import ImagePicker from './ImagePicker';
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from "expo-linear-gradient";

const endList = () => { 
    return ( 
  <View style={styles.endList}>
  </View>
  ); 
 }; 

const topList = () => { 
return ( 
  <View style={styles.boite}>
  <Text style={styles.textStyle3}>Repond aux quiz, récolte des feuilles et gagne des réductions!</Text>
  <View style={styles.boite2}>
    <AntDesign name="questioncircle" size={24} color="gray" />
    <Ionicons name="ios-arrow-forward" size={32} color="gray" />
    <Entypo name="leaf" size={24} color="gray" />
  </View>
  </View>
); 
}; 


// import Bouttons from '../Components/Bouttons';

// function PageAcceuil({navigation}) {
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight:()=> {
//         return<IconButton/>;
//           // <FlatList 
//           //   data ={IDENTIFIANTS} 
//           //   keyExtractor={(item) => item.id} 
//           //   renderItem={renderIdentifientsItems}/>
//       },
//     });
//   }, [navigation, PageAcceuil]);
function renderCategoryItem(itemData){
  return(
    <IdentifientsGrid profil={itemData.item.profil} title={itemData.item.title} imageUrl={itemData.item.imageUrl} caption={itemData.item.caption} quiz={itemData.item.quiz}/>

  );
}


function HomePageScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
    return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              
              <Text style={styles.textStyle5}>- - 20 juin 2023 - - </Text>
              <Text style={styles.textStyle2}> Challenge du jour:
              Arroser vos plantes!{"\n"}</Text>
              <ImagePicker/>
            </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Pic your daily Pop !</Text>
      </Pressable>
      </View>


        

        <FlatList
          ListHeaderComponent={topList}
          data={IDENTIFIANTS}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          ListFooterComponent={endList}
        />





      


{/* 
      <FlatList
        data={IDENTIFIANTS}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      /> */}


      

      
  </>
    );
};

export default HomePageScreen;


const styles = StyleSheet.create({
  centeredView: {
        // marginTop: 65,
        // padding: 10,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        width: '105%',
    },
    button: {
        elevation: 2,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
    },
    boite:{
      backgroundColor: '#C9DCBD',
      width: '75%',
      borderRadius:25,
      alignSelf:'center', 
      marginTop: 10
  
    },
    boite2:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    boite3:{
      width: '75%',
    },
    buttonOpen: {
        backgroundColor: '#4C7C4C',
        width: '60%',
        padding: 10,
    },
    buttonClose: {
        backgroundColor:'olivedrab',
        //backgroundColor: '#C9DCBD',
        width: '90%',
        marginTop:'60%',
        height:180,
        
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    textStyle2: {
      color: 'white',
      // color: '#4C7C4C',
      textAlign: 'center',
      fontSize: 21
  },
  textStyle3: {
    color: '#4C7C4C',
    textAlign: 'center',
    fontSize: 15
},
textStyle4:{
  fontSize: 50,
  color: '#4C7C4C',
},
textStyle5:{
  fontSize: 30,
  color: 'white',
},
    modalText: {
        marginBottom: 13,
        textAlign: 'center',
    },          
    container: {
        // flex: 1, 
        flexDirection: 'column',// main axis en colonne VS Cross axis en ligne
        backgroundColor: '#fff',//permet d'avoir des bords autour des objects
        paddingTop:17,// dessend les icones
        paddingBottom:20,
        // padding: 4,
        borderColor: '#91CAA2',

        // alignItems: 'center', 
    },
    BoiteTitre: {
        borderRadius:20,
        borderColor: '#91CAA2',
        borderWidth: 2,
        backgroundColor: '#C6E2CF', 
        padding: 9, //permet d'avoir des bords dans la boite
        alignItems: 'center', //texte centrer dans la boite
        width: '80%',//longeur de ma boite
        elevation:9,
        justifyContent: 'center',
        alignSelf:'center'
    },
    BoiteFeed: {
        borderRadius:20,
        borderColor: '#91CAA2',
        borderWidth: 2,
        backgroundColor: '#C6E2CF', 
        width: '100%',//longeur de ma boite
        elevation:9,
        
    },
    Titre1:{
        fontSize: 30,
    },
    Titre2:{
        fontSize: 17,
        alignItems:'baseline'
    },
    Image1:{
        width:370,
        height:370,
        alignSelf: 'center'

    },
    Image2:{
        width:50,
        height:50,
    },
    endList: { 
      height: 20, 
    }

})