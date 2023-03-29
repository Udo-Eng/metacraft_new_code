import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Location from "../components/home/Location";
import MenuBarLogo from "../components/home/MenuBarLogo";
import WalletBalance from "../components/home/WalletBalance";
import RequestList from "../components/home/RequestList";
import Menu from "../components/home/Menu";


const Home = () => {

  const [showMenu, setShowMenu] = useState(false);

  function displayUserMenu() {
    setShowMenu((prevState) => !prevState);
  }

  function closeMenu() {
    setShowMenu(false);
  }



  return (
      <View style={styles.screen}>
        <View>
          <Text style={styles.title}>Current Location</Text>
          <View style={styles.row}>
            <Location />
            <MenuBarLogo
              onPress={displayUserMenu}
            />
          </View>
        </View>
        <WalletBalance />

        {/* <RequestList /> */}

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <RequestList
            title="Ongoing requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <RequestList
            title="Upcoming requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <RequestList
            title="New requests"
            navHandler={() => {
              console.log("clicked");
            }}
          />
          <View style={styles.padding}></View>
        </ScrollView>
        <Menu  showModal={showMenu}  closeModalHandler={closeMenu} />
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
  scrollView: {
    marginBottom: 50,
    flex: 1,
  },
  padding: {
    marginVertical: 16,
  },
});
