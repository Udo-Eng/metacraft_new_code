import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const ClientInput = ({
  container,
  text,
  children,
  textStyle,
  inputBorder,
}) => {
  return (
    <View style={container}>
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.inputField, inputBorder]}>
        {children}
        
      </View>
    </View>
  );
};

export const ClientImage = ({ container, text, children }) => {
  return (
    <View style={container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.imgContainer}>
        <Text style={styles.img}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#221b38",
    marginBottom: 5,
  },
  inputField: {
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 15,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
  },
  img: {
    width: 74,
    height: 74,
    borderRadius: 8,
    marginRight: 10,
  },
});
