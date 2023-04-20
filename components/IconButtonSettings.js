import { Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function IconButtonSettings({icon, color, onPress}) {
    return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <Ionicons name='settings' size={24} color='black'/>
    </Pressable>
    );
}

export default IconButtonSettings; 

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
}); 