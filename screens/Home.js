import React from "react";
import { View, StyleSheet } from "react-native";
import HomeLayout from "../components/homeLayout/HomeLayout";
import RequestList from "../components/home/RequestList";
import HomeMenu from "../components/home/HomeMenu";

const Home = () => {
  return (
    <View style={styles.screen}>
      <HomeLayout
        locationTitle="Current Location"
        location="Ibadan"
        balance="N 0.00"
        title="Current Balance"
        note="Withdraw"
        data={<HomeMenu closeMenu={closeMenu} />}
      >
        {/* <RequestList /> */}

        <View>
          <RequestList
            linkText="View all requests"
            title="Ongoing requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <RequestList
            linkText="View all requests"
            title="Upcoming requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <RequestList
            linkText="View all requests"
            title="New requests"
            navHandler={() => {
              console.log("clicked");
            }}
          >
            <Text>There is a request</Text>
          </RequestList>
          <View style={styles.padding}></View>
        </View>
      </HomeLayout>
    </View>
  );
};

export default Home;

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
