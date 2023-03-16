import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import NavIcon from "../../components/ui/NavIcon";
import { useState } from "react";
import UpLoadCard from "../../components/IDVerification/UpLoadCard";

const IDForm = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState("");
  const [showModal,setShowModal] = useState(false);
  const [displayData, setDisplayData] = useState("");

  function goBackHandler() {
    navigation.goBack();
  }

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: idNumber.length > 4 ? COLORS.primaryColor : "#E0E0E0",
      color: "#ffffff",
    },
  ];
  const buttonTextStyles = [
    styles.buttonText,
    { color: idNumber.length > 4 ? "#ffffff" : "#828282" },
  ];

  
  function onSubmitHandler() {
    if (idNumber.length < 1) {
      return;
    }

    //   Display the Modal
    // After Image Selection
    // Navigate to Profile Page
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      {/* <TouchableWithoutFeedback  onPress={Keyboard.dismiss}> */}
      <ScrollView>
        <UpLoadCard  visible={showModal}/>
        <View>
          <NavIcon onPress={goBackHandler} />
          <Text style={styles.title}>Enter the ID number on your card</Text>
          <Text style={styles.subTitle}>
            The unique ID number you are about to enter into the text field
            below is highlighted in the card shown.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/ID/DriverID.png")} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter ID Number"
            cursorColor="black"
            onChangeText={setIdNumber}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableWithoutFeedback onPress={onSubmitHandler}>
          <View style={buttonStyles}>
            <Text style={buttonTextStyles}>Continue</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default IDForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    // fontFamily: 'Be Vietnam',
    textAlign: "left",
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
  },
  subTitle: {
    // fontFamily: 'Be Vietnam',
    width: SIZES.width < 450 ? 330 : 420,
    height: 72,
    fontSize: 14,
    paddingLeft: 12,
    lineHeight: 23,
    fontWeight: "400",
    marginBottom: 4,
    color: "#4E6458",
  },
  image: {
    width: 328,
    height: 200,
  },
  inputContainer: {
    borderColor: "gray",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: SIZES.width < 450 ? 330 : 420,
  },
  button: {
    width: SIZES.width < 400 ? 260 : 350,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderVertical: 16,
    backgroundColor: "#E0E0E0",
    marginTop: 40,
    // borderColor: COLORS.primaryColor,

    borderRadius: 4,
  },
  buttonText: {
    color: "#828282",
  },
});
