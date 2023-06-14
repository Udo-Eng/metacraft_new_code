import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ClientImage, ClientInput } from "../../../components/ui/ClientInput";
import { useNavigation } from "@react-navigation/native";

const Inspection = ({ route }) => {
  const navigation = useNavigation();
  const {
    id,
    date,
    time,
    images,
    address,
    service,
    sub_service,
    payment,
    note,
  } = route.params;
  return (
    <View style={styles.container}>
      <ClientInput
        text="Request Status"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={[styles.inputText, { color: "#fff" }]}>
          Request Accepted - Not yet started
        </Text>
      </ClientInput>
      <ClientInput
        text="Client's Location"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{address}</Text>
      </ClientInput>
      <ClientInput
        text="Service Requested"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{service}</Text>
      </ClientInput>
      <ClientInput
        text="Sub Service requested"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{sub_service}</Text>
      </ClientInput>
      <ClientInput
        text="Payment Method"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{payment}</Text>
      </ClientInput>
      <ClientInput
        text="Note"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{note}</Text>
      </ClientInput>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Inspection Complete</Text>
        </Pressable>
      </View>

      <View style={[styles.btnContainer, styles.btnContainer2]}>
        <Pressable
          style={[styles.btn, { backgroundColor: "#fff" }]}
          onPress={() => navigation.navigate("Quote for Repair")}
        >
          <Text style={[styles.btnText, { color: "#420d8b" }]}>Give Quote</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => {}}>
          <Text style={[styles.inputText, { color: "#221b38" }]}>
            Cancel Request
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Inspection;

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
    color: "#828282",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
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
});
