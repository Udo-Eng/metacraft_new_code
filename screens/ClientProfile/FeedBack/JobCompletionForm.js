import { View, Text, StyleSheet,Text ,TextInput} from "react-native";
import React from "react";
import Dropdown from "../../.../components/ui/DropDown";
import PrimaryButton from "../../.../components/ui/PrimaryButton";

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
    <View>
      <Text style={styles.title}>Job Completion Report</Text>

      <Text>Did the artisan complete the job?</Text>
      <Dropdown
        label="No"
        userDefinedLabelStyle={styles.labelStyle}
        dropdownLabel="Did the artisan complete the job?"
        onSelect={onSelectInputHandler.bind(this, "service")}
        data={data}
      />

      {/* Have you paid cash to the Artisan? */}

      <Dropdown
        label="No"
        userDefinedLabelStyle={styles.labelStyle}
        dropdownLabel="Have you paid cash to the Artisan?"
        onSelect={onSelectInputHandler.bind(this, "service")}
        data={data}
      />

      <View style={styles.outerRatingContainer}>
        <Text style={styles.labelStyle}>Rate Artisan</Text>
        <View style={StyleSheet.ratingContainer}></View>
      </View>

      <View style={styles.isssueContainer}>
        <Text style={styles.issueLabel}>What is the issue?</Text>

        {/* LIST OF OPTIONS  */}
        <View style={styles.optionContainer}>
          <Text style={styles.option}>
            I changed my mind about this service
          </Text>
        </View>

        <View style={styles.optionContainer}>
          <Text style={styles.option}>Emergency situation</Text>
        </View>

        <View style={styles.optionContainer}>
          <Text style={styles.option}>Artisan behavior</Text>
        </View>

        {/* Quality of the service */}
        <View style={styles.optionContainer}>
          <Text style={styles.option}>Quality of the service</Text>
        </View>
      </View>

      {/* COMMENTS OPTIONAL  */}

      <View style={styles.outerInputContainer}>
      <Text style={styles.labelStyle}>Comment (optional)</Text>
        <View style={StyleSheet.inputContainer}>
            <TextInput 
                autoCapitalize='none'
                autoComplete='off'
                multiline={true}
                cursorColor='#000000'
                underlineColorAndroid='transparent'
            />
        </View>
      </View>

      {/* SUBMIT BUTTON */}
      <PrimaryButton
          onPress={()=> {}}
        >
         Submit rating
        </PrimaryButton>

    </View>
  );
};

export default JobCompletionForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontFamily: "Be Vietnam",
    fontWeight: "600",
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
    fontFamily: "Be Vietnam",
    fontWeight: "600",
  },

  outerRatingContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ratingContainer: {
    width: 329,
    height: 76,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  outerInputContainer:{
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputContainer:{
    width: 329,
    height: 109,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  //   Issues Styles
  issueContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  issueLabel: {
    fontSize: 14,
    fontFamily: "Be Vietnam",
    fontWeight: "400",
  },
  optionContainer: {
    width: 328,
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  option: {
    fontSize: 14,
    fontFamily: "Be Vietnam",
    fontWeight: "500",
    color: "#221B38",
  },
  
});
