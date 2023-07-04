import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const SuccessPage = ({ title, image, note, btnText, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={image} />
      <Text style={styles.note}>{note}</Text>

      {/* Navigation Button */}
      <Pressable onPress={onPress}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",

    marginBottom: 111,
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
    marginTop: "10%",
    alignItems: 'center',
    justifyContent: "center",
    width: 320,
    height: 44,
    backgroundColor: "#420d8b",
    borderRadius: 4,
  },

  btnText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#f1e8fd",
  },
});
