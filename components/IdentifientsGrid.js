// import IconButton from '../components/Icon';
import React, {useState} from 'react';
import {ImageBackground, Alert, Modal, StyleSheet, Text, Image, Pressable, View} from 'react-native';
import { IDENTIFIANTS } from '../data/id';
import identifiants from '../models/identifiants';
import {AntDesign} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import RadioButtonContainer from "./RadioButtonContainer.js";
import {SafeAreaView } from "react-native";

// const identifiants = IDENTIFIANTS.find((identifiants) => identifiants.id===identifiantsID);

function IdentifientsGrid({profil,id,title,imageUrl,caption,quiz}){
  function HeaderButtonPressHandler() {
  };
    console.log('Pressed')
  const [modalVisible, setModalVisible] = useState(false);
    const data=[
      {
        text: "Acheter une plante verte",
      },
      {
        text: "Réaliser une marche de collecte de déchets",
      },
      {
        text: "Trier vos déchets",
      },
    ];
    const onRadioButtonPress = (itemIdx) => {
      console.log("Clicked", itemIdx);
    };

    return(
      
      <View>
        <View style={styles.gridItem}>
                <View style={styles.innerContainner}>
                    <Image source ={{uri:profil}}  style={styles.imageProfil}/>
                    <Text  style={styles.nomUtilisateur}>{title}</Text>
                    <Image source ={{uri:imageUrl}} style={styles.image}/>
                </View> 

                {/* <View style={styles.innerContainnerCaption}> */}
                  <Text  style={styles.caption}>{caption}</Text>
                {/* </View> */}
                     {/* <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTextBis}>{quiz}</Text>
                                <Pressable
                                style={[styles.buttonBis, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalText}>Close</Text>
                                </Pressable>
                            </View>
                      </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <AntDesign name="questioncircle" size={24} color="#4C7C4C" />
                        </Pressable> */}
                        <SafeAreaView>
                              <View style={styles.textContainer}>
                                <Text style={styles.text}>Quel défi est réalisé?</Text>
                              </View>
                                <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                                <StatusBar style="auto" />
                        </SafeAreaView>
                        <Pressable style={styles.buttonVrai} onPress={(HeaderButtonPressHandler)}>
                            <Text style={styles.textValider}> Valider
                              </Text>
                        </Pressable>

                        {/* <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.modalView}>
                            <SafeAreaView>
                              <View style={styles.textContainer}>
                                <Text style={styles.text}>Quel défi est réalisé?</Text>
                              </View>
                                <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                                <StatusBar style="auto" />
                            </SafeAreaView>
                                <Pressable
                                style={[styles.buttonBis, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalText}>Valider</Text>
                                </Pressable>
                            </View>
                      </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <AntDesign name="questioncircle" size={24} color="#4C7C4C" />
                        </Pressable> */}
</View>
                
        </View>
    );
}
export default IdentifientsGrid;

const styles=StyleSheet.create({
  textValider:{
    fontSize: 14, 
    color:'white'
  },
  buttonVrai: {
    width: 65, 
    height: 29,
    zIndex:1, 
    marginLeft:310,
    marginTop:-35,
    // alignContent: 'center', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#4C7C4C', 
    borderRadius: 100, 
  },
    gridItem:{
        margin:5,
        // flexDirection: 'column',
        flex:1,
        height:525,//400
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        padding:1,
    },
    innerContainner:{
      // height: 360,
      // justifyContent: 'flex-start',
      flexDirection: 'row',
      // flexGrow:0.7,
      // alignItems: 'center',
      // alignContent: 'center',
      // textAlign: 'center',
      // justifyContent: 'center',

    },
    innerContainnerCaption:{
      // height: 60,
      flexDirection: 'row',
      // flexGrow:0.7,
      // alignItems: 'center',
      // alignContent: 'center',
      // textAlign: 'center',
      justifyContent: 'space-between',

    },
    imageProfil:{
      width:40,
      height: 40,
      zIndex:1,
      alignSelf:'flex-start',
      borderRadius: 100, 
      borderColor: 'gray', 
      borderWidth: 1, 
    },
    nomUtilisateur:{
      position: 'absolute',
      zIndex:1,
      // alignSelf:'flex-start',
      color:'white',
      fontSize: 19,
      marginLeft:45,
      marginTop:5,
      fontWeight: 'bold'
      
    },
    image:{
        width:'98%',
        marginTop: 2,
        height: 350,
        borderRadius: 8,
        marginLeft:-35
    },
    modalView: { //boite une fois appuyé
        margin: 5,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginTop:510,
        padding: 10,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonBis: { //bouton "close" 
        borderRadius: 100,
        elevation: 3,
      },
      button: { //bouton "close" et ?
        borderRadius: 100,
        elevation: 3,
        marginLeft:355,
        marginRight:1,
        marginTop:3
      },
      buttonOpen: {
        backgroundColor: '#FFFFFF',
      },
      buttonClose: {
        backgroundColor: '#FFFFFF',
        width:60,
        alignSelf:'center'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor:'#D5D5D5',
        borderRadius:400,
        fontSize:20
        // alignSelf: 'flex-end'
      },
      caption:{
        position: 'absolute',
        zIndex:1,
        // alignSelf:'flex-start',
        color:'black',
        fontSize: 17,
        marginLeft:7,
        marginTop:355,

      },
      modalText: {
        color: 'black',
        padding: 3,
        textAlign: 'center',
        // alignSelf:'center'
      },
      modalTextBis: {
        color: 'black',
        padding: 3,
        textAlign: 'center',
      },
      textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0, //10
        marginTop:4
      },
      text: {
        fontSize: 14,
        fontWeight: "bold",
        color:'#4C7C4C',
        marginTop:30
      },
      });