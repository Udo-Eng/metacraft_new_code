import { TextInput, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PasswordInput = ({
  label,
  textInputConfig,
  LabelStyle,
  inputStyle,
  invalid,
}) => {
  const inputLabelStyle = [
    styles.inputLabel,
    LabelStyle,
    invalid ? styles.labelError : null,
  ];
  const defaultInputStyle = [
    styles.input,
    inputStyle,
    invalid ? styles.inputError : null,
  ];

  const defaultContainerStyle = [
    styles.inputContainer,
    invalid ? styles.inputError : null,
  ];

  return (
    <View style={styles.inputOuterContainer}>
      {/* PASSWORD INPUT*/}
      <Text style={inputLabelStyle}>{label ? label : "Password"}</Text>
      <View style={defaultContainerStyle}>
        <TextInput style={defaultInputStyle} {...textInputConfig} cursorColor="#000000" secureTextEntry={true}/>
        <Ionicons name="ios-eye-outline" size={24} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputOuterContainer: {
    width: "100%",
    marginTop: 26,
  },
  inputContainer: {
    borderColor: "#E0E0E0",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  inputLabel: {
    opacity: 0.7,
    color: "#828282",
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  inputError: {
    fontSize: 14,
    borderColor: "#d49b9b",
  },
  labelError: {
    color: "#a31717",
  },
});
export default PasswordInput;
