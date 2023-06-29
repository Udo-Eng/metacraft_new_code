import React, { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import PrimaryButton from "../../ui/PrimaryButton";

export default CancelRequest = ({open,closeModal}) => {

  // const [visible, setIsVisible] = useState(false);

  



  return (
    <Modal visible={open}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>
          Are you sure you want to Cancel this request ?
        </Text>

<Text style={styles.tip} >You won’t be charged for canceling this request</Text>

        <PrimaryButton btnStyle={styles.outlineButton}>
          <Text style={styles.textStyle}>No, Do not cancel</Text>
        </PrimaryButton>

          <Text style={styles.yes} onPress={closeModal}>Yes, Cancel</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 326,
    height: 210,
  },
  textStyle:{
    color: '#420D8B',
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  outlineButton: {
    width: 241,
    height: 45,
    borderColor: "#420D8B",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginTop: 14,
  },
  title: {
    width: 199,
    textAlign: 'center',
    color: '#221B38',
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  tip:{
    width:273,
    textAlign: 'center',
    color: '#221B38',
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  yes: {
    textDecorationLine: 'underline',
    textDecorationColor: "#420D8B   ",
    color: '#420D8B',
    marginVertical: 5
  },
});
