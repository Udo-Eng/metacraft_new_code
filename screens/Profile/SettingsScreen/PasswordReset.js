import {  StyleSheet, ScrollView } from "react-native";
import React from "react";
import PasswordInput from "../../../components/ui/PasswordInput";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const PasswordReset = () => {


  const saveChangesHandler = () => {
    // TODO LATER
    console.log("Password Reset Successful");
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
    
      {/* RESET PASSWORD FORM */}

      <>
        {/* OLD PASSWORD  */}
        <PasswordInput
          label="Old Password"
          LabelStyle={styles.labelStyle}
          invalid={false}
          inputContainer={{ height: 44 }}
          textInputConfig={{
            //   value: inputs.firstName.value,
            underlineColorAndroid: "transparent",
            placeholderTextColor: "#221B38",
            //   onChangeText: onChangeTextHandler.bind(this, "firstName"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        />
        

        {/* NEW PASSWORD */}
        <PasswordInput
          label="New Password"
          LabelStyle={styles.labelStyle}
          invalid={false}
          inputContainer={{ height: 44 }}
          textInputConfig={{
            //   value: inputs.firstName.value,
            underlineColorAndroid: "transparent",
            placeholderTextColor: "#221B38",
            //   onChangeText: onChangeTextHandler.bind(this, "firstName"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        />


         {/* CONFIRM NEW PASSWORD */}
         <PasswordInput
          label="Confirm new Password"
          LabelStyle={styles.labelStyle}
          invalid={false}
          inputContainer={{ height: 44 }}
          textInputConfig={{
            //   value: inputs.firstName.value,
            underlineColorAndroid: "transparent",
            placeholderTextColor: "#221B38",
            //   onChangeText: onChangeTextHandler.bind(this, "firstName"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        />

      </>

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
    paddingLeft: 16,
    paddingRight: 16,
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


export default PasswordReset;
