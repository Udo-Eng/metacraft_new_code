import { View, Text } from "react-native";
import React from "react";
import SuccessPage from "../../../components/ui/SuccessPage";

const BidSuccess = () => {
  return (
    <View>
      <SuccessPage
        title="Bid Sent"
        note="Your bid has been submitted and we will get back to you as soon as it is approved"
        btnText="Go to home"
      />
    </View>
  );
};

export default BidSuccess;
