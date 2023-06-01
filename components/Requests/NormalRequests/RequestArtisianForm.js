// Creating a request form for the Artisian
import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Dropdown from "../../ui/DropDown";
import PrimaryButton from "../../ui/PrimaryButton";
import Input from "../../ui/Input";
import { useNavigation } from "@react-navigation/native";

//  REQUEST ARTISIAN FORM WITH STATE UI AND LOGIC

const RequestArtisianForm = () => {
  const navigation = useNavigation();

  // Sample data for testing dropdown component
  const data = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "Four", value: "4" },
    { label: "Five", value: "5" },
  ];

  // Setting up the form  state
  const [inputs, setInputs] = useState({
    location: { value: "" },
    service: { value: "" },
    serviceList: { value: "" },
    pictureAvailable: { value: "" },
    serviceTime: { value: "" },
    noOfClient: { value: "" },
    serviceCost: { value: "" },
    paymentMethod: { value: "" },
  });

  //   A handler function to update the state value
  const onChangeTextHandler = (identifier, inputValue) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [identifier]: { value: inputValue },
      };
    });
  };

  const onSelectInputHandler = (identifier, inputValue) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [identifier]: { value: inputValue },
      };
    });
  };

  function clearUserInputs() {
    setInputs({
      location: { value: "" },
      service: { value: "" },
      serviceList: { value: "" },
      pictureAvailable: { value: "" },
      serviceTime: { value: "" },
      noOfClient: { value: "" },
      serviceCost: { value: "" },
      paymentMethod: { value: "" },
    });
  }

  const onSubmitHandler = () => {
    const userData = {
      location: inputs.location.value,
      service: inputs.service.value,
      serviceList: inputs.serviceList.value,
      pictureAvailable: inputs.pictureAvailable.value,
      serviceTime: inputs.serviceTime.value,
      noOfClient: inputs.noOfClient.value,
      serviceCost: inputs.serviceCost.value,
      paymentMethod: inputs.paymentMethod.value,
    };

    // TODO LATER
    // Navigate to screen Loading Page
    // navigation.replace("");

    // Clear all the inputs states

    clearUserInputs();
  };

  return (
    <View style={styles.container}>
      <ScrollView
       showsVerticalScrollIndicator={false}
      >
        {/* LOCATION  */}
        <Input
          label="Update Location"
          LabelStyle={styles.LabelStyle}
          textInputConfig={{
            value: inputs.location.value,
            underlineColorAndroid: "transparent",
            onChangeText: onChangeTextHandler.bind(this, "location"),
            autoCorrect: false,
            autoCapitalize: false,
            placeholder: "Gbagada, lagos",
          }}
        />

        {/* implement services DROPDOWN  */}
        <Dropdown
          label="Hair Stylist"
          dropdownLabel="What service do you require today?"
          onSelect={onSelectInputHandler.bind(this, "service")}
          data={data}
        />

        {/* IMPLEMENT SERVICES LIST DROP DOWN  */}
        {/* Service List */}
        <Dropdown
          label="3 services selected "
          dropdownLabel="Service List"
          onSelect={onSelectInputHandler.bind(this, "serviceList")}
          data={data}
        />

        {/* IMPLEMENT IS PICTURE AVAIABLE  DROP DOWN  */}
        <Dropdown
          label="No"
          dropdownLabel=" Do you have pictures of the style you want?"
          onSelect={onSelectInputHandler.bind(this, "pictureAvailable")}
          data={data}
        />
        {/* Do you have pictures of the style you want?  */}

        {/*  iMPLEMENT WHEN THE SERVICE IS NEEDED DATE PICKER */}

        {/* Number of people requesting service */}
        <Input
          label="Number of people requesting service"
          LabelStyle={styles.LabelStyle}
          textInputConfig={{
            placeholder: "1",
            value: inputs.noOfClient.value,
            underlineColorAndroid: "transparent",
            onChangeText: onChangeTextHandler.bind(this, "location"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        />

        {/* Implementing Total cost of service input field  */}
        <Input
          label="Total cost of service"
          LabelStyle={styles.LabelStyle}
          textInputConfig={{
            placeholder: "10,000",
            value: inputs.serviceCost.value,
            underlineColorAndroid: "transparent",
            onChangeText: onChangeTextHandler.bind(this, "location"),
            autoCorrect: false,
            autoCapitalize: false,
          }}
        />

        {/* IMPLEMENT TOTAL COST OF PAYMENT */}
        <Dropdown
          tipInfo="You won’t be charged for it yet - "
          linkText="Click to learn more"
          label="Select mode of payment"
          dropdownLabel="Payment Method"
          onSelect={onSelectInputHandler.bind(this, "pictureAvailable")}
          data={data}
        />

        {/*CONTINUE BUTTON */}
        <PrimaryButton
          btnContainer={styles.btnContainer}
          onPress={onSubmitHandler}
        >
          Find Hair stylist
        </PrimaryButton>
        <View style={{margin: 10}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: { marginTop: 50 },
  container: {
    flex: 1,
    padding: 16,
  },
  LabelStyle: {
    opacity: 1,
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
});

export default RequestArtisianForm;
