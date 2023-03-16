import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UpLoadCard = ({ visible }) => {
  const navigation = useNavigation();

  function navigateToCamera() {
    // TODO Navigate to ID capture Screen
  }

  function navigatetoFileUpload() {
    // TODO Navigate to fileUpload  Screen
  }
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.card}>
          <Text style={styles.title}>Upload Voter’s Card</Text>
          <TouchableWithoutFeedback onPress={navigateToCamera}>
          <View style={styles.upLoadOption}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="ios-camera-outline"
                size={20}
                color={COLORS.primaryColor}
              />
            </View>
            <Text style={styles.text}>Take photo of ID</Text>
          </View>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback onPress={navigatetoFileUpload}>
            <View style={styles.upLoadOption}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="image"
                  size={20}
                  color={COLORS.primaryColor}
                />
              </View>
              <Text style={styles.text}>Upload ID</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default UpLoadCard;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  card: {
    width: SIZES.width < 450 ? 330 : 420,
    height: 210,
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    // fontFamily: 'Be Vietnam',
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 30,
    color: COLORS.primaryColor,
  },
  upLoadOption: {
    padding: 16,
    paddingTop: 10,
    width: "80%",
    // height: 40,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-start"
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(224, 224, 224, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  text: {
    color: "#4E6458",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
  },
});
