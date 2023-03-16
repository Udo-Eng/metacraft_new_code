import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../constants";
import PromptUser from "../../components/ui/PromptUser";
import Logo from "../../components/ui/Logo";
import SignUpForm from "../../components/auth/SignUpForm";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Logo />
      <Text style={styles.title}>Let’s get you started!</Text>

      <SignUpForm />

      {/* FOOTER SECTION */}

      {/*Prompt the User to flow another User workflow  */}

      <PromptUser
        linkText="Sign In"
        prompt="Already have an account?"
        onPress={() => {
          // TODO LATER
          navigation.replace("signin");
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
  iconOpacity: {
    opacity: 0.6,
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
  link: {
    color: COLORS.primaryColorText,
  },
});

export default SignUp;
