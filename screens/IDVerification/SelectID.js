import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import NavIcon from "../../components/ui/NavIcon";
import IDItem from "../../components/IDVerification/IDItem";

const SelectID = ({ navigation }) => {
  const Cards = ["Driver’s License", "NIN", "Permanent Voter’s Card"];

  function goBackHandler() {
    navigation.goBack();
  }

  function navigateToPolicyHandler() {
    console.log("Pressed")
    // TODO navigate to policy screen
    // navigation.navigate("policy");
  }

  return (
    <View style={styles.screen}>
      {/* TOP SCREEN AREA */}
      <View style={styles.topContainer}>
        <NavIcon onPress={goBackHandler} />
        <Text style={styles.title}>
          <Text style={styles.link}>Select</Text> your identity card
        </Text>
        <Text style={styles.subTitle}>Which ID would you like to use?</Text>

        {/* IDS CONTAINER */}
        <View style={styles.IdItemsContainer}>
          {Cards.map((item, index) => {
            return <IDItem item={item} key={index} />;
          })}
        </View>
      </View>

      {/* BOTTOM SCREEN */}
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText} >
          Your photo ID captured during the ID verification process may
          constitute biometric data. Please see our{" "}   
            <Text onPress={navigateToPolicyHandler} style={styles.link}> Privacy Policy </Text>
          for more information about how we store and use your biometric data.
        </Text>
      </View>
    </View>
  );
};

export default SelectID;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    height: 72,
  },
  title: {
    // fontFamily: 'Be Vietnam',
    textAlign: "left",
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  subTitle: {
    // fontFamily: 'Be Vietnam',
    fontSize: 16,
    paddingLeft: 12,
    fontWeight: "400",
    marginBottom: 4,
    color: "#4E6458",
  },
  IdItemsContainer: {
    marginTop: 44,
  },
  link: {
    color: COLORS.primaryColorText,
  },
  bottomText:{
     // fontFamily: 'Be Vietnam',
    fontSize: 12,
    paddingLeft: 12,
    fontWeight: "400",
    color: "#4E6458",
  }
});
