import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Location from "../home/Location";
import MenuBarLogo from "../home/MenuBarLogo";
import WalletBalance from "../home/WalletBalance";
import Popup from "../home/PopUp";

const HomeLayout = ({
  children,
  locationTitle,
  location,
  balance,
  title,
  note,
  data,
  closeMenu,
}) => {
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
        <Text style={styles.title}>{locationTitle}</Text>
        <View style={styles.row}>
          <Location location={location} />
          <MenuBarLogo onPress={displayUserMenu} />
        </View>
      </View>
      <WalletBalance balance={balance} title={title} note={note} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <Popup showModal={showMenu} closeModalHandler={closeMenu}>
        {data}
      </Popup>
    </View>
  );
};

export default HomeLayout;

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
