import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS } from "../../constants";
import PromptUser from "../../components/ui/PromptUser";
import Logo from "../../components/ui/Logo";
import SignInForm from "../../components/auth/SignInForm";

const SignIn = ({ navigation }) => {
  return (
      <View style={styles.scrollView}>
        <Logo />
        <Text style={styles.title}>
          Welcome <Text style={styles.link}>Back!</Text>
        </Text>

        <SignInForm />

        {/*Prompt the User to flow another User workflow  */}

        <PromptUser
          linkText="Sign Up"
          prompt="Don't have an account"
          onPress={() => {
            navigation.replace("signup");
          }}
        />
      </View>
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
  link: {
    color: COLORS.primaryColor,
  },
});

export default SignIn;
