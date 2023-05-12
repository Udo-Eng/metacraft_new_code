import { View, Text, StyleSheet, Pressable } from "react-native";
import { SIZES } from "../../constants";
import React from "react";
import HomeIcon from "../../assets/NavIcons/MenuNav/HomePage.svg";
import ProfileIcon from "../../assets/NavIcons/MenuNav/Profile-Settings.svg";
import UtilIcon from "../../assets/NavIcons/MenuNav/UtilityIcons.svg";
import WalletIcon from "../../assets/NavIcons/MenuNav/Wallet.svg";
import StarRatings from "../../assets/ratings/RatingGroup.svg";
import { useNavigation } from "@react-navigation/native";

const NavLinkComponent = ({ item }) => {
  return (
    <View style={styles.navContainer}>
      {/* DISPLAY ICONS */}
      {item.icon()}
      <Text style={styles.navlink} onPress={item.handler}>
        {item.title}
      </Text>
    </View>
  );
};

const HomeMenu = ({ showModal, closeModalHandler }) => {
  const modalConatinerStyles = [
    styles.bottomSheetModalContainer,
    { top: showModal ? SIZES.height / 2 : SIZES.height },
  ];

  const navigation = useNavigation();

  const navLinkData = [
    {
      icon: () => <HomeIcon width={24} height={24} />,
      title: "Home",
      handler: () => {
        console.log("clicked");
        closeModalHandler();
        navigation.navigate("home");
      },
    },
    {
      icon: () => <ProfileIcon width={24} height={24} />,
      title: "Profile",
      handler: () => {
        console.log("clicked");
        navigation.navigate("ArtisianProfile");
      },
    },
    {
      icon: () => <UtilIcon width={24} height={24} />,
      title: "Wallet",
      handler: () => {
        console.log("clicked");
        navigation.navigate("Wallet Header");
      },
    },
    {
      icon: () => <WalletIcon width={24} height={24} />,
      title: "Request",
      handler: () => {
        console.log("clicked");
      },
    },
  ];

  return (
    <View>
      <View style={styles.ratingContainer}>
        <Text style={[styles.rating, { color: "#221B38" }, styles.marginRight]}>
          Rating
        </Text>
        <View>
          <Text>DISPLAY STARS FOR RATING </Text>
        </View>
        <StarRatings width={80} height={16} />
        <Text style={styles.rating}>3.5/5.0</Text>
      </View>
      <View style={styles.ratingTip}>
        <Text style={styles.ratingTipText}>
          Your rating is low if it falls below 3.0 your account will be
          temporarily suspended
        </Text>
      </View>
      {navLinkData.map((item, index) => (
        <NavLinkComponent key={index} item={item} />
      ))}
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  backDrop: {
    width: SIZES.width,
    height: SIZES.height,
    position: "absolute",
    backgroundColor: "black",
    opacity: 1,
  },
  bottomSheetModalContainer: {
    padding: 14,
    position: "absolute",
    backgroundColor: "#ffffff",
    width: SIZES.width,
    height: SIZES.height / 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  navContainer: {
    height: 44,
    padding: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 8,
  },
  ratingTip: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 16,
    width: 328,
    height: 48,
    backgroundColor: "#FFF8EB",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B35E09",
  },
  ratingTipText: {
    width: 328,
    height: 30,
    lineHeight: 16,
    fontWeight: "300",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 12,
  },
  navlink: {
    textDecorationLine: "underline",
    color: "#8C44EE",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    marginLeft: 13,
  },
  rating: {
    color: "#828282",
    lineHeight: 26,
    fontWeight: "300",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
    marginLeft: 10,
  },
  marginRight: {
    marginLeft: 0,
    marginRight: 13,
  },
});
