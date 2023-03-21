import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const RadioButttonItem = ({ title,value,onPress,checked}) => {

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{title}</Text>
      <RadioButton
        value={value}
        status={checked === value ? "checked" : "unchecked"}
        onPress={onPress}
        uncheckedColor="#420D8B"
      />
    </View>
  );
};

export default RadioButttonItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 16,
    padding: 12,
    width: 328,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  text: {
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },
});
