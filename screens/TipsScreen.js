import { View, Text,ImageBackground , StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
const image = {uri: 'https://e0.pxfuel.com/wallpapers/392/354/desktop-wallpaper-light-yellow-aesthetic-soft-yellow-aesthetic.jpg'}
const image2 = {uri: 'https://i.pinimg.com/236x/aa/4f/b6/aa4fb6ec391286356a949f0823c00ea2.jpg'}
const image3 = {uri: 'https://www.itl.cat/pngfile/big/51-516691_sweet-as-apple-geometry-iphone-wallpaper-0351-minimalist.png'}
const image4 = {uri: 'https://i.pinimg.com/170x/29/74/80/29748024385efc09c25c5d6c9b4cfbbc.jpg'}
const image5 = {uri: 'https://i.pinimg.com/236x/a8/7b/8a/a87b8ac409736fa34eb84bd90f35ff50.jpg'}
function TipsScreen() {
    return (
        // <LinearGradient colors={['#C9DCBD', '#F5F5F5']}style={styles.container}>
        <ImageBackground source={image4} style={styles.image}>
            <Text style={styles.texteTitre}>Faites attention à votre consomation d'eau!</Text>
            <Text style={styles.texteTitre3}>Un français consomme en moyenne 143 litres d’eau par jour. Certains gestes simples permettent de freiner cette utilisation excessive des ressources : </Text>
            <Text style={styles.texteTitre2}>Ne pas laisser couler le robinet : éteindre l’eau pendant le nettoyage des mains ou le brossage de dents, mais aussi penser à colmater les fuites.</Text>
            <Text style={styles.texteTitre2}>Petites astuces pour faire la vaisselle sans gaspiller d’eau:  </Text>      
            <Text style={styles.texteTitre2}>Quand vous nettoyez votre vaisselle à la main, utilisez les deux bacs de votre évier ou – le cas échéant –  une bassine : un bac avec du produit vaisselle pour récurer, un autre pour rincer.
Sachez aussi que, contrairement aux idées reçues, utiliser un lave-vaisselle (catégorie A) est plus économique en eau que le lavage à la main.</Text>

        </ImageBackground>
            
        // </LinearGradient>
    );
}

export default TipsScreen;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        // opacity:0.5
        
    },
    texteTitre:{
        marginTop: 8,
        width: '80%',
        fontSize: 30,
        fontWeight: '400',
        color: 'black',
        alignSelf:'center',
        // justifyContent: 'center',
        textAlign:'center',


    },
    texteTitre2:{
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        alignSelf:'center',
        width: '90%',
        marginTop: 6,
        textAlign: 'justify'
    },
    texteTitre3:{
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        alignSelf:'center',
        width: '90%',
        marginTop: 120,
    }

})