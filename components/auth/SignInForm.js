import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import PrimaryButton from "../ui/PrimaryButton";
import InputErrorMessage from "../ui/InputErrorMessage";
import { useNavigation } from "@react-navigation/native";

const SignInForm = () => {
  const [inputs, setInputs] = useState({
    email: { value: "", invalid: false },
    password: { value: "", invalid: false },
  });

  const navigation = useNavigation();

  function setInputsHandler(identifier, inputValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [identifier]: { value: inputValue, invalid: false },
      };
    });
  }

  function clearUserInputs() {
    setInputs({
      email: { value: "", invalid: false },
      password: { value: "", invalid: false },
    });
  }

  function onSubmitHandler() {
    const emailIsInValid = !(
      inputs.email.value.trim().length > 0 && inputs.email.value.includes("@")
    );
    const passwordIsInValid = !(inputs.password.value.trim().length > 6);

    // Update the valid State of the two inputs
    setInputs((currentInputs) => {
      return {
        email: { value: currentInputs.email.value, invalid: emailIsInValid },
        password: {
          value: currentInputs.password.value,
          invalid: passwordIsInValid,
        },
      };
    });

    if (emailIsInValid || passwordIsInValid) {
      return;
    } else {
      const userData = {
        email: inputs.email.value,
        password: inputs.password.value,
      };

      // Send a request to backend Server

      // Navigate to user dashboard on sucessful signin

      console.log("Sign In sucessfully");

      navigation.replace("home");


      //  Clear the User inputs states on sucessful signin 
      clearUserInputs();
    }
  }

  return (
    <KeyboardAvoidingView>
      {/* EMAIL */}
      <Input
        label="Email"
        invalid={inputs.email.invalid}
        textInputConfig={{
          value: inputs.email.value,
          onChangeText: setInputsHandler.bind(this, "email"),
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
      {inputs.email.invalid && <InputErrorMessage message="Email is invalid" />}

      {/* PASSWORD  INPUT*/}
      <PasswordInput
        invalid={inputs.password.invalid}
        textInputConfig={{
          value: inputs.password.value,
          onChangeText: setInputsHandler.bind(this, "password"),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />
      {inputs.password.invalid && (
        <InputErrorMessage message="Enter password greater than 6 characters" />
      )}

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

      {/* SIGN IN  BUTTON  */}
      <PrimaryButton
        btnContainer={{ marginTop: 100 }}
        onPress={onSubmitHandler}
      >
        Sign In
      </PrimaryButton>
    </KeyboardAvoidingView>
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

export default SignInForm;
