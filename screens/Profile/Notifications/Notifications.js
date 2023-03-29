import { View,StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavLinkIcon from "../../../components/Profile/NavLinkIcon";

const Notifications = ({navigation}) => {


  const navLinksData = [
    {
      text: "Push Notifications",
      icon: () => (
        <Ionicons name="ios-notifications-outline" size={24} color="#420D8B" />
      ),
      handler: function () {
        navigation.navigate("pushNotifications");
      },
    },
    {
      text: "Email Notifications",
      icon: () => (
        <MaterialCommunityIcons
          name="email-sync-outline"
          size={24}
          color="#420D8B"
        />
      ),
      handler: function () {

        navigation.navigate("emailNotifications");
      },
    },
  ];

  return (
    <View style={styles.screen}>
      {navLinksData.map((link, index) => {
        return (
          <NavLinkIcon
            key={index}
            icon={link.icon}
            linkText={link.text}
            onPress={link.handler}
          />
        );
      })}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 30,
    alignItems: "center",
  },
});
