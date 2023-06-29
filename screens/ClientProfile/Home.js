import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Location from "../../components/home/Location";
import MenuBarLogo from "../../components/home/MenuBarLogo";
import WalletBalance from "../../components/home/WalletBalance";
import RequestList from "../../components/home/RequestList";
import ServiceSelectionForm from "../../components/Requests/NormalRequests/ServiceSelectionForm";
import Menu from "../../components/home/Menu";
// import Dropdown from "../../components/ui/DropDown";

const Home = () => {
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
          <Text style={styles.title}> Location</Text>
          <View style={styles.row}>
            <Location />
            <MenuBarLogo onPress={displayUserMenu} />
          </View>
        </View>
        <WalletBalance walletText="Top-Up" />

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
        <Menu showModal={showMenu} closeModalHandler={closeMenu} />
      </View>
      {/* <Dropdown label="Select Item" data={data} onSelect={setSelected}/> */}
      <ServiceSelectionForm
        label={selected || "Choose Service"}
        onSelect={setSelected}
      />
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
