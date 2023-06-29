import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import React from "react";
// import Star from "../../assets/Logo/Star.svg";
// import Location from "../../assets/Logo/Location.svg";
// import Person from "../../assets/Logo/Person.svg";
// import HairStylist from "../../assets/Logo/HairStylist.svg";

const ConfirmRequestScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.infoTip}>
        One last thing please confirm the details of your request
      </Text>
      {/* Location Preview  */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Your Location</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>Gbagada, lagos</Text>
        </View>
      </View>

      {/* Service Requested Preview */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Service Requested</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>Hair Stylist</Text>
        </View>
      </View>

      {/* Services requested Preview */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Services requested</Text>
        <View style={styles.innerPreviewContainer}>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Wig Installation</Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Wig Styling</Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Cornrows</Text>
          </View>
        </View>
      </View>

      {/* Pictures Selected Screen Preview  */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>
          Do you have pictures of the style you want?
        </Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>No</Text>
        </View>
      </View>

      {/* Preview for Number of people requesting a service */}

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Number of people requesting service</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>1</Text>
        </View>
      </View>

      {/* Preview for Total cost of service  */}

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Total cost of service</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>10,000</Text>
        </View>
      </View>

      {/* Preview of  Payment Method */}
      <View style={styles.previewContainer}>
        <Text style={[styles.label, { marginBottom: 2 }]}>Payment Method </Text>
        <Text style={styles.paymentInfo}>
          You will be charged for after Job completion
        </Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>Cash</Text>
        </View>
      </View>

      {/* ARTISAN SELECTED SUMMARY */}

      {/* Summary Component for Artisan */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Artisian Selected</Text>
        <View style={styles.artisanSummary}>
          <Image
            source={require("../../assets/Logo/styles/Artisan.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>Comfor Mama</Text>
            <Text style={[styles.name, styles.skill]}>Hair Stylist</Text>
            <Text style={[styles.name, styles.skill]}>Ifako- Gbagada</Text>
          </View>
        </View>
      </View>

      {/* ACTIONS CONTAINER */}

      <View style={styles.actions}>
        {/* Accept Button  */}

        {/* TODO LATER IMPLEMENT THE ONPRESS  FUNCTION */}
        <PrimaryButton onPress={() => {}} btnStyle={{ width: 241, height: 44 }}>
          <Text>Confirm Request</Text>
        </PrimaryButton>

        {/* Cancel Text Button  */}
        <Text style={styles.cancelTextTip}>
          You won’t be charged for canceling this request
        </Text>

        {/* Cancel Request Button  */}

        <PrimaryButton
          onPress={() => {}}
          btnStyle={styles.outlineButton}
          textStyle={styles.textStyle}
        >
          <Text>Cancel Request</Text>
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default ConfirmRequestScreen;

const styles = StyleSheet.create({
  // Genaral container style
  container: {
    alignItems: "center",
  },

  //   General Preview container ,label and Values Styles
  infoTip: {
    width: 296,
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 13,
    textAlign: "center",
  },
  previewContainer: {
    marginVertical: 12,
    alignItems: "flex-start",
  },
  innerPreviewContainer: {
    padding: 12,
    width: 328,
    alignItems: "flex-start",
    paddingLeft: 15,
    backgroundColor: "#FAF9FD",
    borderWidth: 1,
    borderColor: "#F1E8FD",
    borderRadius: 4,
  },
  label: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },

  //   Special Styles for the dot component and the  listItem
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: "#221B38",
    marginRight: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentInfo: {
    color: "#493B5D",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 10,
    marginBottom: 5,
  },

  //   Actions Button Styles
  actions: {
    marginTop: 34,
    width: 354,
    height: 194,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 17,
  },

  // Outlined Button
  outlineButton: {
    width: 241,
    height: 45,
    borderColor: "#221B38",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginTop: 14,
  },
  textStyle: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  cancelTextTip: {
    width: 302,
    padding: 10,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    color: "#420D8B",
    marginVertical: 5,
  },

  //   Artisan  Preview Styles section
  artisanSummary: {
    width: 328,
    height: 111,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 20,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
    marginRight: 17,
  },
  name: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  skill: {
    color: "#828282",
  },
});
