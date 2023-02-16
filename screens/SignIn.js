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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import PromptUser from "../components/ui/PromptUser";
import PrimaryButton from "../components/ui/PrimaryButton";
import Logo from "../components/ui/Logo";

const SignIn = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
     <Logo />
      <Text style={styles.title}>
        Welcome <Text style={styles.link}>Back!</Text>
      </Text>

      {/* EMAIL */}
      <Input
        label="Email"
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      >
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color="black"
          style={styles.iconOpacity}
        />
      </Input>

      {/* PASSWORD  INPUT*/}

      <PasswordInput
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>


      {/* SIGN IN  BUTTON  */}
      <PrimaryButton
        btnContainer={{ marginTop: 100 }}
        onPress={() => {
          // TODO LATER
          navigation.replace("success");
        }}
      >
        Sign In
      </PrimaryButton>

      {/*Prompt the User to flow another User workflow  */}

      <PromptUser
        linkText="Sign Up"
        prompt="Don't have an account"
        onPress={() => {
          navigation.replace("signup");
        }}
      />
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
  link: {
    color: COLORS.primaryColor,
  },
});

export default SignIn;
