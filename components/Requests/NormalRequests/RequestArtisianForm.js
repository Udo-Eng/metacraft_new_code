// Creating a request form for the Artisian
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import Dropdown from "../../ui/DropDown";
import PrimaryButton from "../../ui/PrimaryButton";
import Input from "../../ui/Input";
import { useNavigation } from "@react-navigation/native";
import CalenderIcon from "../../../assets/Logo/calender.svg";
import UploadIcon from "../../../assets/RequestArtisianForm/Upload-outlined.svg";
import CancelIcon from "../../../assets/RequestArtisianForm/Cancel-circle.svg";
import AddIcon from "../../../assets/RequestArtisianForm/Add.svg";

//  REQUEST ARTISIAN FORM WITH STATE UI AND LOGIC

const RequestArtisianForm = () => {
  // would use the navigation later to navigate
  const navigation = useNavigation();

  // Sample data for testing dropdown component
  const data = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "Four", value: "4" },
    { label: "Five", value: "5" },
  ];

  const servicesData = [
    { label: "Plumber", value: "Plumber" },
    { label: "Carpenter", value: "Carpenter" },
    { label: "Barber", value: "Barber" },
    { label: "Electrician", value: "Electrician" },
    { label: "Hair Stylist", value: "Hair Stylist" },
    { label: "Make up artist", value: "Make-Up Artist" },
    { label: "Market runner", value: "Market Runner" },
  ];

  const serviceList = ["Wig installation", "Wig treatment", "cornrows"];

  const pictureOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
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

  // RETURNED UI FOR THE ARTISIAN FORM

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        {/* DEFINE A NEW SET OF SERVICES LIST FOR DROPDOWN */}

        {/* List of  Services DROPDOWN  */}
        <Dropdown
          label="Hair Stylist"
          dropdownLabel="What service do you require today?"
          onSelect={onSelectInputHandler.bind(this, "service")}
          data={servicesData}
        />

        {/* IMPLEMENT SERVICES LIST DROP DOWN  */}
        {/* Service List */}
        <Dropdown
          label="3 services selected "
          dropdownLabel="Service List"
          onSelect={onSelectInputHandler.bind(this, "serviceList")}
          data={serviceList}
        />

        {/* IMPLEMENT IS PICTURE AVAIABLE  DROP DOWN  */}

        <Dropdown
          label="No"
          dropdownLabel=" Do you have pictures of the style you want?"
          onSelect={onSelectInputHandler.bind(this, "pictureAvailable")}
          data={data}
        />

        {/* Do you have pictures of the style you want?  */}

        {/* IF YES IS SELECTED  */}

        {/* NO IMAGE SELECTED PREVIEW  */}
        {/* implement the function to call the User Gallery API and select Images  */}
        <Pressable onPress={() => {}}>
          <View style={styles.noImagesPreview}>
            <UploadIcon width={21} height={22} />
            <Text style={styles.imagePreviewText}>Upload pictures</Text>
          </View>
        </Pressable>

        {/* When Images are selected  */}

        <View style={styles.imagesPreviewContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/RequestDetails/image1.png")}
            />
            <View style={styles.iconContainer}>
              <CancelIcon width={16} height={16} />
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/RequestDetails/image2.png")}
            />
            <View style={styles.iconContainer}>
              <CancelIcon width={16} height={16} />
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/RequestDetails/image3.png")}
            />
            <View style={styles.iconContainer}>
              <CancelIcon width={16} height={16} />
            </View>
          </View>
          <View style={styles.addImageContainer}>
            <AddIcon width={24} height={24} />
            <Text style={styles.imagePreviewText}>Add more</Text>
          </View>
        </View>

        {/*  DATE PICKER */}

        <View style={styles.datePickerContainer}>
          <Text style={styles.dateLabel}>When is the service needed ?</Text>
          <View style={styles.datePreview}>
            <View style={styles.dateDataPreview}>
              <Text style={styles.date}>20/09/2022</Text>
              <Text style={styles.date}>9:00 AM</Text>
            </View>

            {/* DISPLAY SVG ICON */}
            <View style={styles.dateIcon}>
              <CalenderIcon width={24} height={24} />
            </View>
          </View>
        </View>

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
        <View style={{ margin: 10 }}></View>
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
  datePickerContainer: {
    marginTop: 26,
  },
  date: {
    color: "#828282",
    marginRight: 10,
  },
  dateLabel: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },

  // IMAGE PREVIEW STYLES
  noImagesPreview: {
    width: 328,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 14,
  },

  imagePreviewText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#000000",
    fontFamily: "Be Vietnam",
  },

  imagesPreviewContainer: {
    flexDirection: "row",
    width: 329,
    justifyContent: "flex-start",
    marginBottom: 15,
  },

  imageContainer: {
    position: "relative",
    width: 74,
    height: 74,
    marginRight: 8,
  },

  iconContainer: {
    position: "absolute",
    right: -6,
    top: -4,
  },

  addImageContainer: {
    borderColor: "#C5A2F6",
    borderWidth: 1,
    borderRadius: 6,
    width: 74,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
  },
  dateDataPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datePreview: {
    borderColor: "#E0E0E0",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
  },
});

export default RequestArtisianForm;
