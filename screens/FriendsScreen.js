import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RequestScreen from "./RequestScreen";
import SuggestionScreen from "./SuggestionScreen"; 

const topTab = createMaterialTopTabNavigator();

function FriendsTab() {
  return (
    <topTab.Navigator 
    tabBarOptions={ {
      activeTintColor: "green", 
      inactiveTintColor: "blue" 
    }

    }
    >
      <topTab.Screen name="Suggestions" component={SuggestionScreen} />
      <topTab.Screen name="Demandes" component={RequestScreen} />
    </topTab.Navigator>
  );
}

// function FriendsScreen() {
//     return (
//         <View>
//             <Text>You don't have any friends yet</Text>
//         </View>
//     );
// }

export default FriendsTab;