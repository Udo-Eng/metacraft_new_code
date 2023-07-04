import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import CancelIcon from "../../../assets/ratings/cancelButton.svg";

const CancellationFeedBackForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reason for Cancelation</Text>
        <CancelIcon width={24} height={24} />
      </View>

      {/* DISPLAY SECTION IF THERE IS AN ISSUE */}
      <View style={styles.issueContainer}>
        <Text style={styles.issueLabel}>What is the issue?</Text>

        {/* LIST OF OPTIONS  */}
        <View style={styles.optionContainer}>
          <Text style={styles.option}>
            I changed my mind about this service
          </Text>
        </View>

        <View style={[styles.optionContainer, styles.selectedOption]}>
          <Text style={[styles.option, styles.selectedText]}>
            Emergency situation
          </Text>
        </View>

        <View style={styles.optionContainer}>
          <Text style={styles.option}>Artisan behavior</Text>
        </View>

        {/* Quality of the service */}
        <View style={styles.optionContainer}>
          <Text style={styles.option}>Quality of the service</Text>
        </View>
      </View>

      <View style={styles.outerInputContainer}>
        <Text style={styles.labelStyle}>Comment (optional)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoComplete="off"
            multiline={true}
            cursorColor="#000000"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      {/* SUBMIT BUTTON */}
      {/* TODO IMPLEMENT THE  SUBMISSION LOGIC */}
      <PrimaryButton
        btnContainer={{ marginTop: 40, width: 328 }}
        onPress={() => {}}
      >
        Send to support
      </PrimaryButton>

      {/* COMMENTS OPTIONAL  */}
    </View>
  );
};

export default CancellationFeedBackForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  titleContainer: {
    width: 328,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    // fontFamily: "Be Vietnam",
    fontWeight: "600",
    color: "#000000",
    marginRight: 50,
  },

  // STYLES FOR THE COMMENTS CONTAINER
  outerInputContainer: {
    width: 330,
    height: 107,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
  },
  inputContainer: {
    width: 329,
    padding: 8,
    height: 109,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  labelStyle: {
    color: "#221B38",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 11,
  },

  //   Issues Styles
  issueContainer: {
    height: 270,
    width: 328,
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  issueLabel: {
    fontSize: 15,
    // fontFamily: "Be Vietnam",
    fontWeight: "400",
    color: "#221B38",
    marginVertical: 8,
  },
  optionContainer: {
    width: 328,
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingLeft: 16,
    marginBottom: 14,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  option: {
    fontSize: 15,
    // fontFamily: "Be Vietnam",
    fontWeight: "500",
    color: "#221B38",
  },
  selectedOption: {
    backgroundColor: "#420D8B",
  },
  selectedText: {
    color: "#ffffff",
  },
});
