import React from "react";
import { View, StyleSheet } from "react-native";
import HomeLayout from "../components/homeLayout/HomeLayout";
import RequestList from "../../components/home/RequestList";

const PlumberFlow = () => {
  return (
    <View style={styles.screen}>
      <HomeLayout
        locationTitle="Update Location"
        location="Gbagada, Lagos"
        balance="N 0.00"
        title="Current Balance"
        note="Top-Up"
      >
        {/* <RequestList /> */}

        <View>
          <RequestList
            linkText="View all"
            title="Manage Requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <RequestList
            linkText="View all"
            title="Saved Requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <View style={styles.padding}></View>
        </View>
      </HomeLayout>
    </View>
  );
};

export default PlumberFlow;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    padding: 16,
  },
  padding: {
    marginVertical: 16,
  },
});
