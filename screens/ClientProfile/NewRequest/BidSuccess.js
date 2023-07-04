import React from "react";
import SuccessPage from "../../../components/ui/SuccessPage";

const BidSuccess = ({ navigation }) => {
  return (
    <SuccessPage
      title="Bid Sent"
      note="Your bid has been submitted and we will get back to you as soon as it is approved"
      btnText="Go to home"
      image={require("../../../assets/feedback/success.png")}
      onPress={() => navigation.navigate("home")}
    />
  );
};

export default BidSuccess;
