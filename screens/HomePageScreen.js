import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import {StyleSheet, FlatList, Alert, Pressable, Modal, Text, Image, View, Button} from 'react-native';
import IdentifientsGrid from '../components/IdentifientsGrid';
import { IDENTIFIANTS } from '../data/id'; 
import ImagePicker from './ImagePicker';
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
    <IdentifientsGrid profil={itemData.item.profil} title={itemData.item.title} imageUrl={itemData.item.imageUrl} quiz={itemData.item.quiz}/>

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
              <Text style={styles.textStyle2}>Challenge du jour: Arroser vos plantes</Text>
            </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Pic your daily Pop!</Text>
      </Pressable>
      </View>

      <FlatList
        data={IDENTIFIANTS}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />

      <ImagePicker/>


      {/* <View style={styles.BoiteFeed}> 
        <Text style={styles.Titre2}>
          @FredIcam
        </Text>
        <Image source={require('../Components/Image1.jpg')} 
        style={styles.Image1}/>
      </View> */}

      
  </>
    );
};

export default HomePageScreen;


const styles = StyleSheet.create({
    centeredView: {
        marginTop: 65,
        padding: 10,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        width: '105%'
    },
    button: {
        padding: 10,
        elevation: 2,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        
        
    },
    buttonOpen: {
        backgroundColor: '#4C7C4C',
        width: '60%',
    },
    buttonClose: {
        backgroundColor: '#C9DCBD',
        width: '80%',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    textStyle2: {
      color: '#4C7C4C',
      textAlign: 'center',
      fontSize: 20
  },
    modalText: {
        marginBottom: 13,
        textAlign: 'center',
    },          
    container: {
        // flex: 1, 
        flexDirection: 'column',// main axis en colonne VS Cross axis en ligne
        backgroundColor: '#fff',//permet d'avoir des bords autour des objects
        paddingTop:20,// dessend les icones
        paddingBottom:20,
        padding: 4,
        borderColor: '#91CAA2',

        // alignItems: 'center',
    },
    BoiteTitre: {
        borderRadius:20,
        borderColor: '#91CAA2',
        borderWidth: 2,
        backgroundColor: '#C6E2CF', 
        padding: 2, //permet d'avoir des bords dans la boite
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
    }
})