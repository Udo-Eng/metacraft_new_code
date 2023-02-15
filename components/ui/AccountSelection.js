import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const AccountSelection = ({
  onPress,
  sourcePath,
  selectionText,
  selectionTextDetails,
  selected,
  imageStyle,
}) => {
  return (
    <View style={styles.selectionContainer}>
      {/*ACCOUNT  SELECTION */}
      <Pressable onPress={onPress}>
        <View style={styles.innerSelectionContainer}>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              style={{ width: 44, height: 44 }}
              source={sourcePath}
            />
          </View>
          <View style={styles.selectionTextContainer}>
            <Text style={styles.selectionText}>{selectionText}</Text>
            <Text style={styles.selectionTextDetails}>
              {selectionTextDetails}
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <View
              style={[
                styles.checkBox,
                {
                  backgroundColor: selected ? COLORS.primaryColor : "#fff",
                },
              ]}
            ></View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default AccountSelection;

const styles = StyleSheet.create({
  selectionContainer: {
    marginTop: 32,
    width: 328,
    height: 90,
  },
  innerSelectionContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    borderColor: "#E0E0E0",
    padding: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 65,
    height: 80,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  selectionTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  selectionText: {
    textAlign: "left",
    marginBottom: 8,
    fontWeight: "bold",
    color: COLORS.selectionText,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  selectionTextDetails: {
    textAlign: "left",
    fontWeight: "normal",
    color: COLORS.selectionText,
    fontSize: 12,
    lineHeight: 20,
    opacity: 0.8,
  },
  checkBoxContainer: {
    paddingTop: 0,
    height: "100%",
  },
  checkBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});
