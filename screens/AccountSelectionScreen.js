import { View, Text, StyleSheet} from "react-native";
import {  COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import PromptUser from "../components/ui/PromptUser";
import AccountSelection from "../components/ui/AccountSelection";


const AccountSelectionScreen = () => {


  const navigation = useNavigation();

  const [clientSelected, setClientSelected] = useState(false);
  const [artisanSelected, setArtisanSelected] = useState(false);

  function signInHandler() {
    navigation.navigate("signin");
  }

  function clientOnboardingHandler() {
    setClientSelected(true);
    setTimeout(() => {
      navigation.navigate("clientonboarding");
      setClientSelected(false);
    }, 500);
  }

  function artisanOnboardingHandler() {
    setArtisanSelected(true);
    setTimeout(() => {
      navigation.navigate("artisanonboarding");
      setArtisanSelected(false);
    }, 100);
  }

  

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to MetaCraft</Text>
      <Text>The leading african skilled work platform</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>What would you be joining us as?</Text>
        <Text style={styles.question_info}>
          *Each account type requires different levels of verfication
        </Text>
      </View>

      {/* ARTISIAN ACCOUNT SELECTION */}
      <AccountSelection
        onPress={artisanOnboardingHandler}
        sourcePath={require("../assets/gettingStarted/provider_image.png")}
        selectionText={"I am a service provider"}
        selectionTextDetails={"I would like to sell my services"}
        selected={artisanSelected}
        imageStyle={{ marginRight: 0 }}
      />

      {/* CLIENT ACCOUNT  SELECTION*/}
      <AccountSelection
        onPress={clientOnboardingHandler}
        sourcePath={require("../assets/gettingStarted/client_image.png")}
        selectionText={"I am a client"}
        selectionTextDetails={"I would like to find and book services"}
        selected={clientSelected}
      />

      {/* ALLOW USER TO SIGNIN IF ACCOUNT EXISTS  */}
      <PromptUser
        prompt="Already have an account"
        linkText="Sign In"
        onPress={signInHandler}
      />
    </View>
  );
};
 


export default AccountSelectionScreen;




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    color: COLORS.titleColor,
    marginVertical: 16,
    fontSize: 26,
    letterSpacing: 0.16,
    fontWeight: "bold",
    // fontFamily:"Be Vietnam",
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "normal",
    color: COLORS.titleColor,
  },
  questionContainer: {
    width: 328,
    height: 92,
    marginTop: 32,
    padding: 12,
    borderWidth: 1,
    borderColor: "#C5A2F6",
    borderRadius: 4,
    backgroundColor: "#FAF9FD;",
  },
  question: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#221B38",
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  question_info: {
    textAlign: "center",
    fontWeight: "normal",
    color: COLORS.titleColor,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.5,
  },
});

