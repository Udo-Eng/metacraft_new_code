import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ProfileImage from "../../components/Profile/ProfileImage";
import Input from "../../components/ui/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import PrimaryButton from "../../components/ui/PrimaryButton";

const PersonalInfo = ({navigation}) => {
  const saveChangesHandler = () => {
    // TODO LATER
    console.log("Items saved");

    navigation.navigate("ArtisianProfile");

  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <ProfileImage profileText={"AT"} />
      {/* UPDATE FORM */}

        {/* FIRSTNAME */}
        <Input
          label="First Name"
          LabelStyle={styles.labelStyle}
          invalid={false}
          inputContainer={{ height: 44 }}
          textInputConfig={{
            //   value: inputs.firstName.value,
            placeholder: "Airspire",
            underlineColorAndroid: "transparent",
            placeholderTextColor: "#221B38",
            //   onChangeText: onChangeTextHandler.bind(this, "firstName"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color="black"
            // style={styles.iconOpacity}
          />
        </Input>
        {/* {!inputs.firstName.isValid && (
        <InputErrorMessage message={"First Name is Invalid"} />
      )} */}

        {/* LASTNAME */}
        <Input
          label="Last Name"
          invalid={false}
          inputContainer={{ height: 44 }}
          LabelStyle={styles.labelStyle}
          textInputConfig={{
            //   value: inputs.firstName.value,
            placeholder: "Technologies",
            placeholderTextColor: "#221B38",
            underlineColorAndroid: "transparent",
            //   onChangeText: onChangeTextHandler.bind(this, "firstName"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color="black"
            // style={styles.iconOpacity}
          />
        </Input>

        {/* EMAIL INPUT */}

        <Input
          label="Email Address"
          inputContainer={{ height: 44 }}
          invalid={false}
          LabelStyle={styles.labelStyle}
          textInputConfig={{
            //   value: inputs.email.value,
            placeholder: "aaat@yahoo.com",
            placeholderTextColor: "#221B38",
            // onChangeText: onChangeTextHandler.bind(this, "email"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={22}
            color="black"
            // style={styles.iconOpacity}
          />
        </Input>
        {/* {!inputs.email.isValid && (
          <InputErrorMessage message={"Email is Invalid"} />
        )} */}

        {/* PHONE NUMBER */}
        <Input
          label="Phone Number"
          inputContainer={{ height: 44 }}
          //   invalid={!inputs.phoneNumber.isValid}
          LabelStyle={styles.labelStyle}
          textInputConfig={{
            //   value: inputs.phoneNumber.value,
            //   onChangeText: onChangeTextHandler.bind(this, "phoneNumber"),
            placeholder: "08123456789",
            placeholderTextColor: "#221B38",
            autoCorrect: false,
            autoCapitalize: false,
            keyboardType: "number-pad",
          }}
        >
          <Feather
            name="phone"
            size={22}
            color="black"
            // style={styles.iconOpacity}
          />
        </Input>
        {/* {!inputs.phoneNumber.isValid && (
          <InputErrorMessage message={"Phone Number is Invalid"} />
        )} */}
    

      <PrimaryButton
        btnContainer={{ marginTop: 32 }}
        btnStyle={styles.btnStyle}
        textStyle={styles.btnTextStyle}
        onPress={saveChangesHandler}
      >
        Save Changes
      </PrimaryButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 18,
    paddingRight: 18,
    // alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#E0E0E0",
    borderWidth: 1,
    borderColor: "#F1E8FD",
  },
  btnTextStyle: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#828282",
  },
  labelStyle: { color: "#221B38" },
});

export default PersonalInfo;
