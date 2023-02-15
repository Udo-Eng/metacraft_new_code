import { View, Text, StyleSheet,Pressable } from 'react-native';
import React from 'react';
import {COLORS} from "../../constants";

const PromptUser = ({prompt,linkText,onPress}) => {
  return (
      <View style={styles.promptContainer}>
         {/*Prompt the User to flow another User workflow  */}
        <View >
          <Text style={styles.prompt}>{prompt}</Text>
        </View>
        <View>
          <Pressable
            onPress={onPress}
          >
            <Text style={[styles.prompt,styles.link]}>{linkText}</Text>
          </Pressable>
        </View>
      </View>
  )
}

export default PromptUser;


const styles = StyleSheet.create({
    link: {
        color: COLORS.primaryColor,
      },
      prompt: {
        marginHorizontal: 6,
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 16,
        color: "#221b38",
        // fontFamily: "Be Vietnam",
      },
      promptContainer: {
        flexDirection:"row",
        marginVertical: 16,
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      },
})