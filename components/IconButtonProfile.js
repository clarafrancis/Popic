import { Pressable, StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

function IconButtonProfile({icon, color, onPress}) {
    return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <FontAwesome name='user' size={24} color='black'/>
    </Pressable>
    );
}

export default IconButtonProfile; 

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
}); 