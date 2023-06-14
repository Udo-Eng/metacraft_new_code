import { View, Text } from "react-native";
import React from "react";
import SuccessPage from "../../../components/ui/SuccessPage";

const JobComplete = () => {
  return (
    <View>
      <Text>
        <SuccessPage
          title="Job Complete"
          note="You have completed your job and the client is satisfied with the job done."
          btnText="Go to home"
          onPress={() => navigation.navigate("home")}
        />
      </Text>
    </View>
  );
};

export default JobComplete;
