import { View, StyleSheet } from "react-native";
import { SIZES } from "../../constants";
import React from "react";

const Popup = ({ showModal, children }) => {
  const modalConatinerStyles = [
    styles.bottomSheetModalContainer,
    { top: showModal ? SIZES.height / 2 : SIZES.height },
  ];

  return <View style={modalConatinerStyles}>{children}</View>;
};

export default Popup;

const styles = StyleSheet.create({
  bottomSheetModalContainer: {
    padding: 14,
    position: "absolute",
    backgroundColor: "#ffffff",
    width: SIZES.width,
    height: SIZES.height / 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
