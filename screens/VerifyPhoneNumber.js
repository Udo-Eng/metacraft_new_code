import {
  Text,
  Pressable,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS,SIZES } from "../constants";
import {useNavigation}  from "@react-navigation/native";

const VerifyPhoneNumber = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/word.png")} />
        </View>
        <Text style={styles.title}>
          Verify <Text style={styles.link}>Phone</Text>
        </Text>

        <View style={styles.verifyInstructionContainer}>
          <Text style={styles.verifyInstructions}>
            Enter the code sent to your phone number to verify and create
            account
          </Text>
        </View>

        {/* INPUTS  */}

        <View style={styles.numberInputsContainer}>
          <TextInput  style={styles.numberInput}/>
          <TextInput style={styles.numberInput}/>
          <TextInput style={styles.numberInput}/>
          <TextInput  style={styles.numberInput}/>
          <TextInput  style={styles.numberInput}/>
        </View>

        <Pressable
          onPress={() => {
            navigation.replace("success");
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Verify and Create Account</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
    backgroundColor: COLORS.backgroundColor,
  },
  container:{
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // fontFamily: 'Be Vietnam',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "left",
    width: "100%",
    marginTop: 30,
    marginBottom: 8,
  },
  verifyInstructionContainer: {
    width: 300,
    height: 60,
    padding: 2
  },
  verifyInstructions: {
    color: "#4E6458",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    opacity: 0.9
  },
  numberInputsContainer: {
    width: "100%",
    flexDirection:"row",
    marginTop: 35,
    marginBottom: 80,
    alignItems: "center",
    justifyContent:"space-evenly"
  },
  numberInput:{
    width: 48,
    height: 48,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 16
  },
  buttonStyle: {
    width: SIZES.width < 400 ? 320 : 350,
    height: 44,
    marginTop: 50,   
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    borderVertical: 16,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 4,
  },
  buttonText: {
    color: COLORS.backgroundColor,
    textAlign: "center",
    fontWeight: "bold"
  },
  link: {
    color: COLORS.primaryColor,
  },
});

export default VerifyPhoneNumber;
