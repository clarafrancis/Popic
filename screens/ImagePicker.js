import {StyleSheet, Text, Image, Pressable, View,TouchableOpacity} from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useState } from 'react';

// import { TouchableOpacity } from 'react-native-gesture-handler';

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
            aspect:[4, 3],
            quality: 0.5,
        });
        setPickedImage(image.assets[0].uri);
    } 

    let imagePreview = <Text style={styles.texte2}>Ton challenge apaitra ici</Text>;
    if (pickedImage){
        imagePreview = <Image styles={styles.image} source={{assets: pickedImage}}/>;

    }




    return(
        <View>
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={takeImageHandler}
          style={styles.touchableOpacityStyle}>
            <Image
            source={require('../assets/logoCameraV2.png')}
            style={styles.floatingButtonStyle}/>
             {/* <View style={styles.imagePreview}>{imagePreview}</View>  */}
            {/* <Pressable style={styles.button} onPress={takeImageHandler}> */}
                {/* <Text style={styles.texte}>Prenez en photo votre challenge !</Text> */}
            {/* </Pressable> */}
        </TouchableOpacity>
        </View>

    );
}

export default ImagePicker

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4C7C4C',
        alignItems: 'center', 
        padding: 2,
        width: '60%',
        alignSelf:'center',
        borderRadius: 20  ,
        marginTop:3 ,
        marginBottom: 70,
    },
    texte:{
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 8
    },
    texte2:{
        color: 'white',
        fontSize: 15,
    },
    imagePreview:{
        width:'50%',
        height: 40,
        marginVertical:2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'gray',
        alignSelf:'center',
        borderRadius:5,
    },
    image:{
        width:'100%',
        height: '100%',
    },
    touchableOpacityStyle: {
        // position: 'absolute',
        //width: 190,
        // height:'20%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // right: '44%',
        // bottom: 6,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius:40
    }
})
