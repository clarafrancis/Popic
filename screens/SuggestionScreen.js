import { View, Text, StyleSheet, Image, FlatList} from "react-native";
import AddFriendsGridTile from "../components/AddFriendsGridTile.js";
// import { FlatList } from "react-native-gesture-handler";
import { ADDFRIENDS } from "../data/dataFRIENDS";
import { StatusBar } from "expo-status-bar";
// import { SearchBar } from "react-native-elements"; 

function SuggestionScreen() {
    function renderAddFriendsItem(itemData){
        return <AddFriendsGridTile pp={itemData.item.pp} username={itemData.item.username}/>};

    
    
    return (
        <>
        <StatusBar style="light"/>
        <View style={styles.container}>
            <View style={styles.topLContainer}>
            
                {/* <Text>You don't have any friends yet</Text> */}
                <Image style={[styles.profilePic, styles.leftContainer]}
                    source={require('../assets/pp.jpg')}/>
            </View>

            <View style={styles.topRContainer}>
                <Text style={{fontWeight: 'bold'}}>Invite tes amis à rejoindre Po'Pic</Text>
                <Text style={styles.url}>picyourpo.p.com</Text>
            </View>
            {/* <View style={styles.bottomContainer}>
                
            </View> */}
            
        </View>

        <FlatList
        data={ADDFRIENDS}
        keyExtractor={(item) => item.id}
        renderItem={renderAddFriendsItem}
        />
        </>
    );
    
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        margin: 16, 
        flexDirection: 'row', 
        // flexGrow: '20%', 
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#C9DCBD',
        backgroundColor: '#C9DCBD', 
        // height: 100, 
        // width: '100%', 
    }, 

    topLContainer: {
        flex : 1, 
        // textAlign: 'center', 
        // justifyContent: 'center', 
        // alignContent: 'center', 
        // alignItems: 'center', 
        // margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD', 
        // height: 200, 
        width: 90,  
    }, 

    topRContainer: {
        flex : 2, 
        padding: 16, 
        // textAlign: 'center', 
        justifyContent: 'space-between'
        // alignContent: 'center', 
        // alignItems: 'center',
        // margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD', 
        // height: 200, 
        // width: '95%' 
    },

    leftContainer : {
        //   marginTop: 50,
        // flex: 1,
        flexDirection: 'row',
        padding: 10, 
        textAlign: 'center',
        alignItems: 'center'
    }, 

    bottomContainer: {
        flex : 2,
        margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD',
        // height: 200,
    }, 

        profilePic: {
            borderRadius: 100,
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: 'black',
            margin: 16,
          }, 

        url: {
            backgroundColor: 'white', 
            color: '#4C7C4C', 
            // borderWidth: 2, 
            borderRadius: 10, 
            // borderColor: 'white', 
        }

})

export default SuggestionScreen;