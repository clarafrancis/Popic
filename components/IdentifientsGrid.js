// import IconButton from '../components/Icon';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Image, Pressable, View} from 'react-native';
import { IDENTIFIANTS } from '../data/id';
import identifiants from '../models/identifiants';

// const identifiants = IDENTIFIANTS.find((identifiants) => identifiants.id===identifiantsID);

function IdentifientsGrid({profil,title,imageUrl,quiz}){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.gridItem}>
                <View style={styles.innerContainner}>
                    {/* <Image source ={{uri:profil}} style={styles.imageProfil}/> */}
                    <Text>{title}</Text>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{quiz}</Text>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalText}>Close</Text>
                                </Pressable>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyle}> ? </Text>
                        </Pressable>
                </View>
            <Image source ={{uri:imageUrl}} style={styles.image}/>
    </View>
    );

}

export default IdentifientsGrid;

const styles=StyleSheet.create({
    gridItem:{
        flex: 1,
        margin:16,
        height:350,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        padding:3,
    },
    innerContainner:{
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    imageProfil:{
      width:'20%',
      height: 20,
    },
    image:{
        width:'100%',
        height: 323,
        borderRadius: 8,
    },
    modalView: {
        margin: 5,
        backgroundColor: '#C6E2CF',
        borderRadius: 10,
        marginTop:40,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#000000',
      },
      buttonClose: {
        backgroundColor: '#FFFFFF',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        color: 'black',
        padding: 3,
        textAlign: 'center',
      },
    });