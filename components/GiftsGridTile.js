import { Pressable, View, Text, StyleSheet, Platform, Button, Alert, Image } from "react-native";
// import { GIFTS } from "../data/dataGIFT";

function GiftGridTile ({companysname, points, detail, image, onPress}) {
    return (
    <View style={styles.gridItem}>
        {/* <Pressable android_ripple= {{color : '#ccc'}} 
        style={({pressed}) => [styles.button, 
        pressed ? styles.buttonPressed: null,
        ]}
        onPress={onPress}
        > */} 
            <View style={styles.innerContainer}>
                <View style={[styles.innerTopContainer, {height: '5%'}]}>
                    <Text style={styles.taskTitle}> {companysname} </Text>
                    <Text style={styles.taskTitle}> {points} </Text>
                </View>
                <View style={styles.innerMidContainer}>
                    <Pressable  style={styles.button} onPress={() => Alert.alert('QR Code à présenter')}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Get it now</Text>
                    </Pressable>
                    <Image source ={{uri:image}} style={styles.image}/>
                </View>

                <View style={styles.innerBottomContainer}>
                    <Text style={styles.taskDet}> {detail}</Text>
                </View>
            </View>
        {/* </Pressable> */}
    </View>
);
}

export default GiftGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        // marginBottom: 16, 
        // marginTop: 16,
        height: 300, 
        // borderRadius: 5,
        backgroundColor:'white',
        shadowColor: 'black',
        ShadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        // shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderWidth : 1,
        borderColor: 'black'
    },

    button:{
        // flex: 1, 
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 100,
        borderWidth: 6,
        // width: 150,
        // paddingLeft: 50, 
        // paddingRight: 50, 
        // height: 40,
        zIndex: 1,
        borderColor: '#44AFAB', 
        backgroundColor: '#44AFAB', 
        justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        // textAlign: 'center',
        // alignSelf: 'center'
    },

    buttonPressed: {
        opacity: 0.50,
    },

    innerContainer:{
        flex: 3, 
        flexDirection: 'column',
        // marginBottom: 10, 
        // marginTop: 16,
        color: '#85C17E',
        // padding: 16, 
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },

    taskTitle: {
        // flex: 1,
        // flexDirection: 'row',
        fontWeight:'bold',
        fontSize: 20,
    }, 

    taskDet: {
        // flex: 1,
        // flexDirection: 'row',
        // fontWeight:'bold',
        fontSize: 15,
    }, 

    innerTopContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center', 
        flexGrow: 0.2
    },

    innerMidContainer: {
        flex: 1, 
        marginTop: 50,
        flexDirection: 'column', 
        // height: '80%', 
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
        flexGrow: 0.7,
    },
    innerBottomContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        alignContent: 'center',
        textAlign: 'center', 
        // height: 40, 
        flexGrow: 0.1,

    }, 
    image: {
        width: '95%', 
        // height: 100,
        height: '100%', 
        marginTop: -100,
        borderRadius: 30, 
        // marginLeft: 10,
        // marginRight: 10, 
    }
}

);