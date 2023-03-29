import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RequestList = ({ title, navHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.link} onPress={navHandler}>View all requests</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>🙂</Text>
        <Text style={styles.text}>You don’t have any</Text>
        <Text style={styles.text}>{title.toLowerCase()}</Text>
      </View>
    </View>
  );
};

export default RequestList;

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 169,
    borderRadius: 4,
    // borderWidth: 1,
    // borderColor: "#828282",
    marginTop: 19,
  },
  titleContainer:{
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     marginVertical: 8,
  },
  innerContainer: {
    width: 328,
    height: 136,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    alignItems: "center",
    justifyContent:"center"
  },
  link: {
    color: "#8C44EE",
    textDecorationLine: "underline",
    lineHeight: 20,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  text:{
    lineHeight: 26,
    fontWeight: "300",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  title:{
    color: "#221B38",
    lineHeight: 26,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 18,
  }
});
