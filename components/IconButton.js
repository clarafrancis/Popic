import { Pressable, StyleSheet} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 

function IconButton({icon, color, onPress}) {
    return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <SimpleLineIcons name={icon} size={20} color={color}/>
    </Pressable>
    );
}

export default IconButton; 

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
}); 