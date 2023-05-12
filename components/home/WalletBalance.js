import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WalletIcon from "../../assets/NavIcons/Wallet.svg";

const WalletBalance = ({walletText}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balance}>N 0.00</Text>
        <Text style={styles.description}>Current Balance</Text>
      </View>
      <View style={styles.withDrawBtn}>
        {/* WALLET ICON */}
        <WalletIcon width="24" height="24" />
        <Text style={styles.withdrawText}>{walletText}</Text>
      </View>
    </View>
  );
};

export default WalletBalance;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
    padding: 16,
    width: 328,
    height: 78,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#828282",
  },
  balance: {
    textAlign: "left",
    lineHeight: 20,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 18,
    color: "#420D8B",
  },
  description: {
    textAlign: "left",
    lineHeight: 18,
    fontWeight: "300",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    color: "#64478C",
  },
  withdrawText:{
    textAlign: "left",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    color: "#420D8B",
  },
  withDrawBtn:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-evenly",
    width: 132,
    height: 44,
    backgroundColor:"#F1E8FD",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#7E60A7"
  }
});
