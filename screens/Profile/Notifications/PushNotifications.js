import { View,StyleSheet } from "react-native";
import React from "react";
import SwitchItem from "../../../components/ui/SwitchItem";

const PushNotifications = () => {
  const switchItems = [
    {
      text: "Inbox Messages",
    },
    {
      text: "Order Messages",
    },
    {
        text: "Rating Reminders",
    },
    {
        text : "Order Updates"
    }
  ];

  return (
    <View style={styles.screen}>
      {switchItems.map((item, index) => {
        return (
          <SwitchItem
            key={index}
            title={item.text}
          />
        );
      })}
    </View>
  );
};

export default PushNotifications;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 30,
    alignItems: "center",
  },
});
