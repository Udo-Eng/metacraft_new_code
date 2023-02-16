import { View, Text, StyleSheet} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import PrimaryButton from "../ui/PrimaryButton";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputErrorMessage from "../ui/InputErrorMessage";

function checkIfPhoneNumberIsValid(phoneNumber) {
  let formattedPhoneNumber = `+234${phoneNumber.slice(1)}`;

  return !isNaN(formattedPhoneNumber) && formattedPhoneNumber.length === 14;
}

function formattedPhoneNumber(phoneNumber){
    return `+234${phoneNumber.slice(1)}`;
}

//   SIGNUP FROM WITH STATE UI AND LOGIC
const SignUpForm = () => {
  const navigation = useNavigation();
  // Setting up the form  state
  const [inputs, setInputs] = useState({
    firstName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    phoneNumber: { value: "", isValid: true },
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
    referralCode: { value: "", isValid: true },
  });

  //   A handler function to update the state value
  const onChangeTextHandler = (identifier, inputValue) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [identifier]: { value: inputValue, isValid: true },
      };
    });
  };

  function clearUserInputs(){
    setInputs({
      firstName: { value: "", isValid: true },
      lastName: { value: "", isValid: true },
      phoneNumber: { value: "", isValid: true },
      email: { value: "", isValid: true },
      password: { value: "", isValid: true },
      referralCode: { value: "", isValid: true },
    })
}

  const onSubmitHandler = () => {

    // implement the validation Logic
    const isFirstNameValid = inputs.firstName.value.trim().length > 0;
    const isLastNameValid = inputs.lastName.value.trim().length > 0;
    const isPhoneNumberValid = checkIfPhoneNumberIsValid(
      inputs.phoneNumber.value
    );
    const emailIsValid =
      inputs.email.value.trim().length > 0 && inputs.email.value.includes("@");
    const passwordIsValid = inputs.password.value.trim().length > 6;

    // Update UI state

    setInputs((currentInputs) => {
      return {
        firstName: {
          value: currentInputs.firstName.value,
          isValid: isFirstNameValid,
        },
        lastName: {
          value: currentInputs.lastName.value,
          isValid: isLastNameValid,
        },
        phoneNumber: {
          value: currentInputs.phoneNumber.value,
          isValid: isPhoneNumberValid,
        },
        email: { value: currentInputs.email.value, isValid: emailIsValid },
        password: {
          value: currentInputs.password.value,
          isValid: passwordIsValid,
        },
        referralCode: {
          value: currentInputs.referralCode.value,
          isValid: false,
        },
      };
    });
    // Show feedback if any input is isValid

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isPhoneNumberValid ||
      !emailIsValid ||
      !passwordIsValid
    ) {
      return;
    }

    const userData = {
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        phoneNumber: formattedPhoneNumber(inputs.phoneNumber.value),
        email: inputs.email.value,
        password: inputs.password.value,
        referralCode: inputs.referralCode.value.length > 0 ? inputs.referralCode.value : null,
    };

    // Testing the User Data
    // console.log(userData); 
    console.log("Sucessfully sign up your account Thanks");
    clearUserInputs();

    // Navigate use to verify phone screen on success
    // TODO LATER 
    // navigation.replace("verifyphonenumber");
  };

  return (
    <>
      {/* FIRSTNAME */}
      <Input
        label="First Name"
        invalid={!inputs.firstName.isValid}
        textInputConfig={{
          value: inputs.firstName.value,
          underlineColorAndroid:"transparent",
          onChangeText: onChangeTextHandler.bind(this, "firstName"),
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
      {!inputs.firstName.isValid && (
        <InputErrorMessage message={"First Name is Invalid"} />
      )}

      {/*LASTNAME */}
      <Input
        label="Last Name"
        invalid={!inputs.lastName.isValid}
        textInputConfig={{
          value: inputs.lastName.value,
          onChangeText: onChangeTextHandler.bind(this, "lastName"),
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
      {!inputs.lastName.isValid && (
        <InputErrorMessage message={"Last Name is Invalid"} />
      )}

      {/* PHONE NUMBER */}
      <Input
        label="Phone Number"
        invalid={!inputs.phoneNumber.isValid}
        textInputConfig={{
          value: inputs.phoneNumber.value,
          onChangeText: onChangeTextHandler.bind(this, "phoneNumber"),
          autoCorrect: false,
          autoCapitalize: false,
          keyboardType:"number-pad",
        }}
      >
        <Feather
          name="phone"
          size={24}
          color="black"
          style={styles.iconOpacity}
        />
      </Input>
      {!inputs.phoneNumber.isValid && (
        <InputErrorMessage message={"Phone Number is Invalid"} />
      )}
      {/* EMAIL INPUT */}

      <Input
        label="Email"
        invalid={!inputs.email.isValid}
        textInputConfig={{
          value: inputs.email.value,
          onChangeText: onChangeTextHandler.bind(this, "email"),
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
      {!inputs.email.isValid && (
        <InputErrorMessage message={"Email is Invalid"} />
      )}

      {/* PASSWORD INPUT  */}
      <PasswordInput
        invalid={!inputs.password.isValid}
        textInputConfig={{
          value: inputs.password.value,
          onChangeText: onChangeTextHandler.bind(this, "password"),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />
     { inputs.password.isValid && <View style={styles.passwordRulesContainer}>
        <Text style={styles.passwordRules}>
          Password must have at least one non alphanumberic character and be at
          least 6 characters
        </Text>
      </View>}
      {!inputs.password.isValid && (
        <InputErrorMessage
          message={
            "password is invalid must contain one alphanumeric character and at least 6 characters"
          }
        />
      )}

      {/* REFFERAL CODE  INPUT */}

      <Input
        label="Enter Referral Code"
        textInputConfig={{
          value: inputs.referralCode.value,
          onChangeText: onChangeTextHandler.bind(this, "referralCode"),
          autoCorrect: false,
          autoCapitalize: false,
        }}
      />

      {/*CONTINUE BUTTON */}

      <PrimaryButton btnContainer={{ marginTop: 50 }} onPress={onSubmitHandler}>
        Continue
      </PrimaryButton>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default SignUpForm;
