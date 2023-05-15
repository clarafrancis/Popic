import { View, Text, StyleSheet, Image } from "react-native";
import AddFriendsGridTile from "../components/AddFriendsGiftsGridTile";
import { FlatList } from "react-native-gesture-handler";
import { ADDFRIENDS } from "../data/dataFRIENDS";
// import { SearchBar } from "react-native-elements"; 

function SuggestionScreen() {
    function renderAddFriendsItem(itemData){
        return <AddFriendsGridTile pp={itemData.item.pp} username={itemData.item.username}/>
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {/* <Text>You don't have any friends yet</Text> */}
                <Image style={[styles.profilePic, styles.leftContainer]}
                    source={require('../assets/pp.jpg')}/>
            </View>
            <View style={styles.bottomContainer}>
                <FlatList
                data={ADDFRIENDS}
                keyExtractor={(item) => item.id}
                renderItem={renderAddFriendsItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 3,
        // margin: 16,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#C9DCBD',
        // backgroundColor: '#C9DCBD',
        // height: 200,
    }, 

    topContainer: {
        flex : 1,
        margin: 16,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#C9DCBD',
        backgroundColor: '#C9DCBD', 
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

})

export default SuggestionScreen;