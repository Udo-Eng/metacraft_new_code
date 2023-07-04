import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import { ClientInput } from "../../../components/ui/ClientInput";
import { useNavigation } from "@react-navigation/native";

const Quote = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ClientInput
        text="Your Location"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{address}</Text>
      </ClientInput>
      <ClientInput
        text="Service Fee"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>NGN 2500</Text>
      </ClientInput>
      <ClientInput
        text=""
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text>
          This is the amount that you charge for the service. Your client's
          selected payment is cash - the sum of N2,500 will be paid to you after
          the repair has been done.
        </Text>
      </ClientInput>
      <ClientInput
        text="Does this repair require parts replacement?"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>Yes</Text>
      </ClientInput>
      <ClientInput
        text="Cost of repair"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>
          This is an additional cost for repair and is independent of the price
          above.{" "}
        </Text>
      </ClientInput>

      <View>
        <ClientInput
          text="Item Name"
          inputBorder={styles.inputBorder}
          container={styles.inputContainer}
        >
          <TextInput placeholder="Efnter name" />
        </ClientInput>
        <ClientInput
          text="Quantity"
          inputBorder={styles.inputBorder}
          container={styles.inputContainer}
        >
          <TextInput placeholder="3" />
        </ClientInput>
        <ClientInput
          text="Amount (N)"
          inputBorder={styles.inputBorder}
          container={styles.inputContainer}
        >
          <TextInput placeholder="300" />
        </ClientInput>
      </View>

      <View style={styles.total}>
        <Text>Total</Text>
        <Text>6</Text>
        <Text>600</Text>
      </View>

      <View>
        <Pressable>
          <Text>Add Item</Text>
        </Pressable>
      </View>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Quote Submitted")}
        >
          <Text style={styles.btnText}>Send Quote</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBorder: {
    borderColor: "#f1e8fd",
    backgroundColor: "#faf9fd",
  },
  inputText: {
    color: "#221b38",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  total: {
      display: 'flex',
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 39,
  },
  btnContainer2: {
    marginTop: 20,
  },
  btn: {
    width: "85%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#420d8b",
    backgroundColor: "#420d8b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  btnText: {
    color: "#f1e8fd",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 27,
    marginBottom: 72,
  },
});
