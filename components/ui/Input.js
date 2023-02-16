import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({
  label,
  children,
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
  const defaultInputStyle = [styles.input, inputStyle];

  const defaultContainerStyle = [
    styles.inputContainer,
    invalid ? styles.inputError : null,
  ];

  return (
    <View style={styles.inputOuterContainer}>
      <Text style={inputLabelStyle}>{label}</Text>
      <View style={defaultContainerStyle}>
        {children}
        <TextInput style={defaultInputStyle} {...textInputConfig} />
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
    borderColor: "gray",
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
    marginHorizontal: 5,
  },
  inputError: {
    backgroundColor: "#d49b9b",
  },
  labelError: {
    color: "#a31717",
  },
});
export default Input;
