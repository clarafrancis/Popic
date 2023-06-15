import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RadioButtonContainer from "../components/RadioButtonContainer.js";

export default function Quizz() {
    const data = [
      {
        text: "Option A",
      },
      {
        text: "Option B",
      },
      {
        text: "Option C",
      },
    ];
  
    const onRadioButtonPress = (itemIdx) => {
      console.log("Clicked", itemIdx);
    };
  
    return (
      <SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Radio Button Demo</Text>
        </View>
  
        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });