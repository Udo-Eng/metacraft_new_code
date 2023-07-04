import { View, Text, StyleSheet, Pressable,ScrollView } from "react-native";
import React from "react";
import { ClientImage, ClientInput } from "../../../components/ui/ClientInput";
import { useNavigation } from "@react-navigation/native";

const NewClientRequest = ({ route }) => {
  const navigation = useNavigation();
  console.log(route.params);
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
    <ScrollView  contentContainerStyle={styles.container}>
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
      {!images ? (
        <ClientInput
          text="Payment Method"
          inputBorder={styles.inputBorder}
          container={styles.inputContainer}
        >
          <Text style={styles.inputText}>{payment}</Text>
        </ClientInput>
      ) : (
        <View>
          <ClientImage text="Pictures" container={styles.inputContainer}>
            {images}
          </ClientImage>

          <ClientInput
            text="Date and time for repair"
            inputBorder={styles.inputBorder}
            container={styles.inputContainer}
          >
            <Text style={styles.inputText}>
              {date} {time}
            </Text>
          </ClientInput>
        </View>
      )}
      <ClientInput
        text="Note"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{note}</Text>
      </ClientInput>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Submit Bid", {
              address: address,
              sub_service: sub_service,
            })
          }
        >
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NewClientRequest;

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
    marginTop: 68,
  },
  btn: {
    width: "85%",
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#420d8b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#420d8b",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
});
