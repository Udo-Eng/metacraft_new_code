import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import Dropdown from "../../../components/ui/DropDown";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import Ratings from "../../../assets/ratings/RatingGroup.svg";

const JobCompletionForm = () => {
  const data = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ];

  const onSelectInputHandler = (identifier, inputValue) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [identifier]: { value: inputValue },
      };
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Job Completion Report</Text>

        <View style={styles.dropDownContainer}>
          <Dropdown
            label="No"
            userDefinedLabelStyle={styles.labelStyle}
            dropdownLabel="Did the artisan complete the job?"
            onSelect={onSelectInputHandler.bind(this, "service")}
            data={data}
          />
        </View>

        {/* Have you paid cash to the Artisan? */}

        <View style={styles.dropDownContainer}>
          <Dropdown
            label="No"
            userDefinedLabelStyle={styles.labelStyle}
            dropdownLabel="Have you paid cash to the Artisan?"
            onSelect={onSelectInputHandler.bind(this, "service")}
            data={data}
          />
        </View>

        <View style={styles.outerRatingContainer}>
          <Text style={styles.labelStyle}>Rate Artisan</Text>
          <View style={styles.ratingContainer}>
            <Ratings width={215} height={43} />
          </View>
        </View>

        {/* COMMENTS OPTIONAL  */}

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

        {/* SUBMIT BUTTON */}
        {/* TODO IMPLEMENT THE  SUBMISSION LOGIC */}
        <PrimaryButton onPress={() => {}}>Submit rating</PrimaryButton>
      </ScrollView>
    </View>
  );
};

export default JobCompletionForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  title: {
    textAlign:"center",
    fontSize: 18,
    // fontFamily: "Be Vietnam",
    fontWeight: "600",
    color: "#000000",
  },
  dropDownContainer: {
    width: 328,
    height: 69,
    marginBottom: 24,
  },
  labelStyle: {
    color: "#828282",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 11,
  },
  issueLabel: {
    color: "#221B38",
    fontSize: 14,
    // fontFamily: "Be Vietnam",
    fontWeight: "600",
  },
  outerRatingContainer: {
    width: 330,
    height: 107,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 26,
  },
  ratingContainer: {
    width: 329,
    height: 76,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  // STYLES FOR THE COMMENTS CONTAINER
  outerInputContainer: {
    width: 330,
    height: 107,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 26,
  },
  inputContainer: {
    width: 329,
    padding: 8,
    height: 109,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  //   Issues Styles
  issueContainer: {
    height: 368,
    width: 328,
    marginTop: 26,
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
