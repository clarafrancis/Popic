import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function GiftGridTile ({task, points, onPress}) {
    return (
    <View style={styles.gridItem}>
        <Pressable android_ripple= {{color : '#ccc'}} 
        style={({pressed}) => [styles.button, 
        pressed ? styles.buttonPressed: null,
        ]}
        onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.taskTitle}>{task} {points}</Text>
            </View>
        </Pressable>
    </View>
);
}

export default GiftGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16, 
        height: 75, 
        borderRadius: 5,
        backgroundColor:'#85C17E',
        shadowColor: 'black',
        ShadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },

    button:{
        flex: 1,
    },

    buttonPressed: {
        opacity: 0.50,
    },

    innerContainer:{
        flex: 1,
        color: '#85C17E',
        padding: 16, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    taskTitle: {
        fontWeight:'bold',
        fontSize: 20,
    }
}

);