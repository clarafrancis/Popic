import {StyleSheet, Text, Image, Pressable, View} from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useState } from 'react';

function ImagePicker(){
    const [pickedImage,setPickedImage]=useState();

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
   
    async function verifyPermissions(){
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                "Pour utiliser l'application, veuillez autoriser l'utilisation de la camera"
            );
            return false;
        }

        return true;
    }


    async function takeImageHandler(){
        const hasPermission=await verifyPermissions();

        if(!hasPermission){
            return;
        }
        const image=await launchCameraAsync({
            allowsEditing: true,
            aspect:[16, 9],
            quality: 0.5,
        });
        setPickedImage(image.uri);
    } 

    let imagePreview = <Text>No image takent yet</Text>
    if (pickedImage){
        imagePreview = <Image styles={styles.image} source={{uri: pickedImage}}/>;

    }




    return(
        <View>
             <View style={styles.imagePreview}>{imagePreview}</View> 
            <View>
            <Pressable style={styles.button} onPress={takeImageHandler}>
                <Text style={styles.texte}> Photo</Text>
            </Pressable>
            </View>
        </View>

    );
}

export default ImagePicker

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4C7C4C',
        alignItems: 'center', 
        padding: 1,
        width: '20%',
        alignSelf:'center',
        borderRadius: 20   
    },
    texte:{
        color: 'white',
        fontSize: 20,
    },
    imagePreview:{
        width:'100%',
        height: 200,
        marginVertical:8,
        justifyContent: 'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height: 320,
        borderRadius: 8,
    }


})
