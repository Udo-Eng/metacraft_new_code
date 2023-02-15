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
import { Feather } from "@expo/vector-icons";
import {useNavigation}  from "@react-navigation/native";

const SignUp = () => {

    const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/word.png")} />
      </View>
      <Text style={styles.title}>Let’s get you started!</Text>

      {/* FIRSTNAME */}
      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={24}
            color="black"
            style={styles.iconOpacity}
          />
          <TextInput style={styles.input} />
        </View>
      </View>

      {/* LASTNAME */}
      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={24}
            color="black"
            style={styles.iconOpacity}
          />
          <TextInput style={styles.input} />
        </View>
      </View>

      {/* PHONE NUMBER  */}
      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Feather
            name="phone"
            size={24}
            color="black"
            style={styles.iconOpacity}
          />
          <TextInput style={styles.input} />
        </View>
      </View>

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
      <View style={styles.passwordRulesContainer}>
        <Text style={styles.passwordRules}>
          Password must have atleast one non alphanumberic character and be
          atleast 6 characters
        </Text>
      </View>

      {/* REFFERAL CODE  */}

      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Enter Referral Code</Text>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>

      {/* CONTINUE BUTTON  */}

      <Pressable
        onPress={() => {
          // TODO LATER
          navigation.replace("verifyphonenumber");
        }}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </Pressable>

      {/* FOOTER SECTION */}

      <View style={styles.footerContainer}>
        <Text style={styles.SignInText}>
          Already have an account?
          <Pressable
            onPress={() => {
              // TODO LATER
              navigation.replace("signin");
            }}
            style={styles.linkContainerStyle}
          >
            <Text style={styles.link}>Sign In</Text>
          </Pressable>
        </Text>
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
    marginBottom: 16,
  },
  inputOuterContainer: {
    width: "100%",
    marginTop: 16,
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
  passwordRulesContainer: {
    marginVertical: 8,
    width: 250,
  },
  passwordRules: {
    fontSize: 10,
    opacity: 1,
    color: "#000",
  },
  buttonStyle: {
    width: SIZES.width < 400 ? 320 : 350,
    height: 44,
    marginTop: 50,
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
  linkContainerStyle:{
      alignItems: "center",
      justifyContent:"center"
  },
  SignInText: {
    marginVertical: 8,
    width: SIZES.width < 450 ? 320 : 400,
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 16,
    color: "#221b38",
    // fontFamily: "Be Vietnam",
  },
  footerContainer: {
    marginVertical: 16,
    width: "100%",
    height: 50,
  },
});

export default SignUp;
