import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import PrimaryButton from "../components/ui/PrimaryButton";
import PromptUser from "../components/ui/PromptUser";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import Logo from "../components/ui/Logo";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Logo />
      <Text style={styles.title}>Let’s get you started!</Text>

      {/* FIRSTNAME */}
      <Input
        label="First Name"
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={styles.iconOpacity}
        />
      </Input>

      {/*LASTNAME */}
      <Input
        label="Last Name"
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={styles.iconOpacity}
        />
      </Input>

      {/* PHONE NUMBER */}
      <Input
        label="Phone Number"
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      >
        <Feather
          name="phone"
          size={24}
          color="black"
          style={styles.iconOpacity}
        />
      </Input>

      {/* EMAIL INPUT */}

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

      {/* PASSWORD INPUT  */}

      <PasswordInput
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />
      <View style={styles.passwordRulesContainer}>
        <Text style={styles.passwordRules}>
          Password must have at least one non alphanumberic character and be
          atleast 6 characters
        </Text>
      </View>

      {/* REFFERAL CODE  INPUT */}

      <Input
        label="Enter Referral Code"
        textInputConfig={{
          onChangeText: (inputText) => console.log(inputText),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />

      {/*CONTINUE BUTTON */}

      <PrimaryButton
        btnContainer={{ marginTop: 50 }}
        onPress={() => {
          // TODO LATER
          navigation.replace("verifyphonenumber");
        }}
      >
        Continue
      </PrimaryButton>

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
    color: COLORS.primaryColor,
  },
});

export default SignUp;
