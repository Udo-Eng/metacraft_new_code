import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const NavLinkImage = ({ iconPath, linkText, onPress, StatusButton }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.navLinkContainer}>
        <View style={styles.navLeft}>
          <View style={styles.iconContainer}>
            <Image source={iconPath} style={styles.imageIcon} />
          </View>
          <Text style={styles.linkText}>{linkText}</Text>
        </View>
        <View style={styles.navRight}>
          {StatusButton && <StatusButton />}
          <AntDesign name="right" size={16} color="#E0E0E0" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navLinkContainer: {
    marginLeft: 16,
    padding: 12,
    width: 328,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  iconContainer: {
    backgroundColor: "#FAF9FD",
    width: 40,
    height: 40,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    width: 24,
    height: 24,
    // marginRight: 16,
  },
  statusBtn: {
    marginRight: 10,
    backgroundColor: "#BA2532",
    width: 72,
    height: 28,
    borderRadius: 56 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    textAlign: "center",
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
  },
  linkText: {
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navRight: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default NavLinkImage;
