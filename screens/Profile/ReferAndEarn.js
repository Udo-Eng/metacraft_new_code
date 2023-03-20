import { View, Text, Image,StyleSheet,TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";

const ReferAndEarn = () => {
  function onShareHandler() {

  }

  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/Gift.png")} style={styles.image} />
      <Text style={styles.title}>Give N100 & Get N200</Text>
      <Text style={styles.tip}>
        Get N200 in your wallet when someone signs up using your referral code
        and successfully completes their first request. Your friend also gets
        N100.
      </Text>
      {/* INPUT CONTAINER */}

      <View style={styles.inputOuterContainer}>
        <Text style={styles.inputLabel}>Your referral code</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="4FCAE79"
            placeholderTextColor={"#221B38"}
            cursorColor="#000000"
          />
          <Image source={require("../../assets/copyImage.png")} style={{width: 24, height: 24}}/>
        </View>
      </View>

      {/* SHARE BUTTON  */}

      <PrimaryButton onPress={onShareHandler} btnStyle={styles.btnStyle}>
        Share Referral Code
      </PrimaryButton>
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    // fontFamily: "Be Vietnam",
    fontFamily: "",
    textAlign: "center",
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 16,
  },
  tip: {
    // fontFamily: "Be Vietnam",
    fontFamily: "",
    textAlign: "center",
    color: "#828282",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
  inputOuterContainer: {
    width: "100%",
    marginTop: 40,
    marginBottom: 24,
  },
  inputContainer: {
    borderColor: "gray",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    height: 44,
    padding: 10,
    flexDirection: "row",
  },
  inputLabel: {
    opacity: 0.7,
    color: "#221B38",
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  btnStyle:{
    backgroundColor: "#420D8B",
  }
});
