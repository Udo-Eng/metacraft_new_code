import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const SuccessPage = ({ title, image, note, btnText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={image} />
      <Text style={styles.note}>{note}</Text>
      <View style={styles.btnContainer}>
        <Pressable onPress={onPress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>{btnText}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: "20%",
  },
  img: {
    marginBottom: "20%",
  },
  note: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    marginTop: "10%",
  },
  btn: {
    width: "60%",
    backgroundColor: "#420d8b",
    borderRadius: 4,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#f1e8fd",
  },
});
