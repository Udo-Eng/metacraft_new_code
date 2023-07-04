import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ClientInput } from "../../../components/ui/ClientInput";

const SubmitBid = ({ route, navigation }) => {
    // const navigation = useNavigation();
  const { address, sub_service } = route.params;
  return (
    <View style={styles.container}>
      <ClientInput
        text="Location"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{address}</Text>
      </ClientInput>

      <ClientInput
        text="Sub Service requested"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <TextInput style={styles.inputText} placeholder={sub_service} />
      </ClientInput>
      <ClientInput
        text="Duration"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <TextInput
          style={styles.inputText}
          placeholder="How many days or hours?"
        />
      </ClientInput>
      <ClientInput
        text="Price range"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.paragraph}>
          This is an estimated cost for workmanship
        </Text>
        <View style={styles.prices}>
          <TextInput style={styles.inputText} />
          <TextInput style={styles.inputText} />
        </View>
      </ClientInput>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Bid Sent")}
        >
          <Text style={styles.btnText}>Submit Bid</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubmitBid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBorder: {
    borderColor: "#e0e0e0",
    backgroundColor: "#faf9fd",
  },
  inputText: {
    color: "#221b38",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: "#828282",
  },
  prices: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 68,
  },
  btn: {
    width: "60%",
    borderRadius: 4,
    backgroundColor: "#420d8b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#f1e8fd",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    paddingVertical: 12,
  },
});
