import {
  ScrollView,
  View,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { SIZES, COLORS } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    // <SafeAreaView style={styles.screen}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/word.png")} />
      </View>
      <Text style={styles.title}>
        Welcome <Text style={styles.link}>Back!</Text>
      </Text>

      {/* EMAIL */}
      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
            style={styles.iconOpacity}
          />
          <TextInput style={styles.input} />
        </View>
      </View>

      {/* PASSWORD */}
      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <Ionicons name="ios-eye-outline" size={24} color="black" />
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

      {/* SIGN IN  BUTTON  */}

      <Pressable
        onPress={() => {
          // TODO LATER
          navigation.replace("success");
        }}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </Pressable>

      {/*Prompt the User to flow another User workflow  */}

      <View style={styles.promptContainer}>
        <View >
          <Text style={styles.prompt}>Don't have an account</Text>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.replace("signup");
            }}
          >
            <Text style={[styles.prompt,styles.link]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
    backgroundColor: COLORS.backgroundColor,
  },
  scrollView: {
    marginTop: 20,
    padding: 16,
    backgroundColor: COLORS.backgroundColor,
    borderWidth: 0,
    flex: 1,
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
    marginTop: 28,
  },
  inputOuterContainer: {
    width: "100%",
    marginTop: 26,
  },
  inputContainer: {
    borderColor: "gray",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  inputLabel: {
    opacity: 0.7,
    color: "#828282",
  },
  iconOpacity: {
    opacity: 0.6,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  forgotPasswordContainer: {
    marginVertical: 8,
    width: 250,
    alignItems: "flex-start",
  },
  forgotPassword: {
    textDecorationLine: "underline",
    opacity: 1,
    color: "#828282",
  },
  buttonStyle: {
    width: SIZES.width < 400 ? 320 : 350,
    height: 44,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderVertical: 16,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 4,
  },
  buttonText: {
    color: COLORS.backgroundColor,
    textAlign: "center",
    fontWeight: "bold",
  },
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
});

export default SignIn;
