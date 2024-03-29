import { View, StyleSheet } from "react-native";
import React from "react";
import NavLinkComponent from "../../../components/Profile/NavLinkComponent";
import ResetIcon from "../../../assets/NavIcons/resetIcon.svg"

const Security = ({navigation}) => {
  function onNavigateHandler() {

    navigation.navigate("passwordreset");

  }

  return (
    <View style={styles.screen}>
      <NavLinkComponent
        icon={() => <ResetIcon width={40} height={40} />}
        linkText={"Password Reset"}
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
