import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { ClientImage, ClientInput } from "../../../components/ui/ClientInput";
import { useNavigation } from "@react-navigation/native";

const UpcomingClientRequest = ({ route }) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const {
    id,
    name,
    phone,
    date,
    time,
    images,
    address,
    service,
    sub_service,
    payment,
  } = route.params;
  return (
    <View style={styles.container}>
      <ClientInput
        text="Request Status"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        {page === 0 ? (
          <Text style={[styles.inputText, { color: "#fff" }]}>
            Request Accepted - Not yet started
          </Text>
        ) : (
          <Text style={[styles.inputText, { color: "#fff" }]}>
            Ongoing - Inspecting Item
          </Text>
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
        text="Date and time for repair"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>
          {date} {time}
        </Text>
      </ClientInput>
      <ClientImage text="Pictures" container={styles.inputContainer}>
        {images}
      </ClientImage>

      <ClientInput
        text="Client's Information"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <View style={styles.clientInfo}>
          <View style={styles.clientImg}></View>
          <View>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            <Text>{address}</Text>
          </View>
        </View>
      </ClientInput>

      {page === 0 ? (
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              setPage(1);
            }}
          >
            <Text style={styles.btnText}>Start Inspection</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.checkbox}>
          <Text style={[styles.inputText, { color: "#000" }]}>
            Inspection Completed
          </Text>
        </View>
      )}

      <View style={[styles.btnContainer, styles.btnContainer2]}>
        <Pressable
          style={[styles.btn, { backgroundColor: "#fff" }]}
          onPress={() =>
            navigation.navigate("Inspection", {
              name: name,
              phone: phone,
              date: date,
              time: time,
              images: images,
              address: address,
              service: service,
              sub_service: sub_service,
              payment: payment,
            })
          }
        >
          <Text style={[styles.btnText, { color: "#420d8b" }]}>
            Prepare Quote
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UpcomingClientRequest;

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
  clientInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 13,
    marginTop: 8,
  },
  clientImg: {
    width: 73,
    height: 73,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
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
