import { View, StyleSheet } from "react-native";
import React from "react";
import NavLinkImage from "../../../components/Profile/NavLinkImage";

const Security = () => {
  function onNavigateHandler() {}

  return (
    <View style={styles.screen}>
      <NavLinkImage
        iconPath={require("../../../assets/NavIcons/resetIcon.png")}
        linkText={"Security"}
        onPress={onNavigateHandler}
      />
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 30,
    alignItems: "center",
  },
});
