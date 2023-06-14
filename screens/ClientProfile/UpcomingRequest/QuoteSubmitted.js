import { View } from "react-native";
import React from "react";
import SuccessPage from "../../../components/ui/SuccessPage";

const QuoteSubmitted = ({ navigation }) => {
  return (
    <View>
      <SuccessPage
        title="Quote Submitted"
        note="You have submitted your quote for the job and you can begin work as soon as the client pays."
        btnText="Go to Home"
        onPress={() => {
          navigation.navigate("home");
        }}
      />
    </View>
  );
};

export default QuoteSubmitted;
