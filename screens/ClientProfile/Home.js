import { View, Text, StyleSheet,ScrollView } from "react-native";
import React, { useState } from "react";
import RequestList from "../../components/home/RequestList";
import Location from "../../components/home/Location";
import WalletBalance from "../../components/home/WalletBalance";
import MenuBarLogo from "../../components/home/MenuBarLogo";
import ServiceSelectionForm from "../../components/Requests/NormalRequests/ServiceSelectionForm";
import Menu from "../../components/home/HomeMenu";
import HomeLayout from "../../components/homeLayout/HomeLayout";
import NewRequest from "./NewRequest/NewRequest";
import UpcomingRequest from "./UpcomingRequest/UpcomingRequest";
// import { useNavigation } from "@react-navigation/native";
// import Dropdown from "../../components/ui/DropDown";

const Home = ({ navigation }) => {
  // const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(undefined);
  //   const data = [
  //     { label: 'One', value: '1' },
  //     { label: 'Two', value: '2' },
  //     { label: 'Three', value: '3' },
  //     { label: 'Four', value: '4' },
  //     { label: 'Five', value: '5' },
  //   ];

  function displayUserMenu() {
    setShowMenu((prevState) => !prevState);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Location</Text>
            <View style={styles.row}>
              <Location location="Ibadan" />
              <MenuBarLogo onPress={displayUserMenu} />
            </View>
          </View>
        <WalletBalance note="Top-Up" balance={"0.00"} title={"Current Balance"}  />

        {/* <RequestList /> */}
        <View style={styles.requestListContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RequestList
              title="Ongoing requests"
              navHandler={() => {
                console.log("clicked");
              }}
            />
            <RequestList
              title="Saved requests"
              navHandler={() => {
                console.log("clicked");
              }}
            />
            <View style={{ marginTop: 10 }}></View>
          </ScrollView>
        </View>
        {/* Display the User Menu List  */}
        <Menu showModal={showMenu} closeModalHandler={closeMenu} />
      </View>
      {/* <Dropdown label="Select Item" data={data} onSelect={setSelected}/> */}
      <ServiceSelectionForm
        label={selected || "Choose Service"}
        onSelect={setSelected}
      />


{/* JOSHUA ARTISIAN SCREEN  PAGE  */}
      {/* <HomeLayout
        locationTitle="Current Location"
        location="Ibadan"
        balance="N 0.00"
        title="Current Balance"
        note="Top-Up"
        data={<HomeMenu closeMenu={closeMenu} />}
      >
      

        <View>
          <RequestList
            linkText="View all requests"
            title="Ongoing requests"
            navHandler={() => {
              navigation.navigate("Requests");
            }}
          />
          <RequestList
            linkText="View all requests"
            title="Upcoming requests"
            navHandler={() => {
              navigation.navigate("Requests");
            }}
          >
            <UpcomingRequest />
          </RequestList>
          <RequestList
            linkText="View all requests"
            title="New requests"
            navHandler={() => {
              navigation.navigate("Requests");
            }}
          >
            <NewRequest />
          </RequestList>
          <View style={styles.padding}></View>
        </View>
      </HomeLayout> */}
      {/* <Dropdown label="Select Item" data={data} onSelect={setSelected}/> */}
     {/* <ServiceSelectionForm
        label={selected || "Choose Service"}
        onSelect={setSelected}
      /> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    padding: 16,
  },
  title: {
    lineHeight: 20,
    fontWeight: "400",
    marginVertical: 8,
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  padding: {
    marginVertical: 16,
  },
  requestListContainer: {
    width: "100%",
    flex: 1,
  },
});
