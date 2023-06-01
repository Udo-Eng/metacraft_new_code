import React, { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import styles from "react-native-backdrop/src/styles";

export default CancelRequest = () => {
  const [visible, setIsVisible] = useState(false);

  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>
          Are you sure you want to Cancel this request ?
        </Text>

        <View style={styles.noButton}>
          <Text>No, Do not cancel</Text>
        </View>

        <View style={styles.yesButton}>
          <Text>Yes, Cancel</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {},
  title: {},
  noButton: {},
  yesButton: {},
});
