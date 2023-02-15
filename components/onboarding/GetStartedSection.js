import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS ,SIZES} from "../../constants";
import PromptUser from "../ui/PromptUser";

// Function to render the Get Started  Section
function GetStartedSection({ title, signUpHandler, signInHandler }) {
  return (
    <>
      <Pressable onPress={signUpHandler}>
        <View style={[styles.buttonStyle, styles.GetStartedButtonStyle]}>
          <Text style={[styles.buttonText, styles.GetStartedTextStyle]}>
            {title}
          </Text>
        </View>
      </Pressable>

      {/* RENDER USER PROMPT */}
      <PromptUser
        prompt="Already have an account?"
        linkText={"Sign In"}
        onPress={signInHandler}
      />
    </>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    width: SIZES.width < 400 ? 300 : 350,
    height: 44,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    borderRadius: 4,
  },
  buttonText: {
    color: "#420D8B",
    textAlign: "center",
  },
  GetStartedButtonStyle: {
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
  },
  link: {
    color: COLORS.primaryColor,
  },
  GetStartedTextStyle: {
    color: "#fff",
    fontWeight:"bold"
  },
});


export default GetStartedSection;