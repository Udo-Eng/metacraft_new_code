import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { ClientInput } from "../../../components/ui/ClientInput";
import { useNavigation } from "@react-navigation/native";

const StartJob = ({ route }) => {
  const [page, setPage] = useState(0);
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
        {page === 0 && (
          <Text style={[styles.inputText, { color: "#fff" }]}>
            Payment Confirmed - Not yet started
          </Text>
        )}
        {page === 1 && (
          <Text style={[styles.inputText, { color: "#fff" }]}>
            Ongoing - You are working on this
          </Text>
        )}
        {page === 2 && (
          <Text style={[styles.inputText, { color: "#fff" }]}>Completed</Text>
        )}
      </ClientInput>
      <ClientInput
        text="Client's Location"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{address}</Text>
      </ClientInput>
      <ClientInput
        text="Priority Level"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>High Priority</Text>
      </ClientInput>
      <ClientInput
        text="Service requested"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{service}</Text>
      </ClientInput>
      <ClientInput
        text="Payment Method"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.paragraph}>
          The client will be paying for this job in cash.
        </Text>
        <Text style={styles.inputText}>{payment}</Text>
      </ClientInput>
      <ClientInput
        text="Note"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{note}</Text>
      </ClientInput>

      {page === 0 && (
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={() => setPage(1)}>
            <Text style={styles.btnText}>Start Job</Text>
          </Pressable>
        </View>
      )}
      {page === 1 && (
        <View>
          <Text style={styles.textNote}>
            Click this button only when the client is satisfied with the job
            done.
          </Text>

          <View style={styles.btnContainer}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                setPage(1);
              }}
            >
              <Text style={styles.inputText}>Stop Job</Text>
            </Pressable>
          </View>
        </View>
      )}
      {page === 2 && (
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Job Complete");
            }}
          >
            <Text style={styles.inputText}>Done</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default StartJob;

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
  paragraph: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: "#828282",
  },
  textNote: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "#221b38",
    textAlign: "center",
    marginBottom: 16,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
