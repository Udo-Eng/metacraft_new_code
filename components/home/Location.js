import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const Location = ({location}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput value={location} cursorColor={"black"} />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    paddingLeft: 15,
    width: 264,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#828282",
    marginRight: 15
  },
});
