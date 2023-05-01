import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
// IMPORT ICONS FORM USER PROFILE
import PersonIcon from "../../assets/NavIcons/Person.svg";
import GiftIcon from "../../assets/NavIcons/Gift.svg";
import IDIcon from "../../assets/NavIcons/ID.svg";
import GearIcon from "../../assets/NavIcons/Gear.svg";
import HelpAndSupport from "../../assets/NavIcons/HelpAndSupport.svg";
import StatusButton from "../../components/Profile/StatusButton";
import NavLinkComponent from "../../components/Profile/NavLinkComponent";
import ProfileImage from "../../components/Profile/ProfileImage";
import ExitIcon from "../../assets/NavIcons/Exit.svg";

const ArtisianProfile = ({ navigation }) => {
  const navLinksData = [
    {
      text: "Personal Information",
      icon: () => <PersonIcon width={40} height={40} />,
      handler: function () {
        navigation.navigate("personalInfo");
      },
    },
    {
      text: "Refer and Earn!",
      icon: () => <GiftIcon width={40} height={40} />,
      handler: function () {
        navigation.navigate("referandearn");
      },
    },
    {
      text: "ID Verification",
      icon: () => <IDIcon width={40} height={40} />,
      handler: function () {
        navigation.navigate("selectId");
      },
    },
    {
      text: "Settings",
      icon: () => <GearIcon width={40} height={40} />,
      handler: function () {
        navigation.navigate("settings");
      },
    },
    {
      text: "Help and Support",
      icon: () => <HelpAndSupport width={40} height={40} />,
      handler: function () {
        // TODO LATER IMPLEMENT THE HELP AND SUPPORT
        navigation.navigate("ArtisianProfile");
      },
    },
  ];

  return (
    <View style={styles.screen}>
      <ProfileImage profileText={"AT"} />
      <Text style={styles.profileName}>Airspire Technologies</Text>
      <Text style={[styles.accountType, { marginBottom: 40 }]}>
        Artisan account
      </Text>
      {navLinksData.map((link, index) => {
        return (
          <NavLinkComponent
            key={index}
            icon={link.icon}
            linkText={link.text}
            onPress={link.handler}
            StatusButton={index === 2 ? StatusButton : null}
          />
        );
      })}

      <Pressable
        onPress={() => {
          navigation.navigate("signin");
        }}
      >
        <View style={styles.signOutContainer}>
          <ExitIcon />
          <Text style={styles.signOutText}>Sign out</Text>
        </View>
      </Pressable>

      <Text style={styles.copy}>Metacraft v1.0 </Text>
      <Text style={styles.copy}>2022</Text>
    </View>
  );
};

export default ArtisianProfile;

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 16,
    paddingRight: 30,
    alignItems: "center",
  },
  copy: {
    color: "#D8CBE7",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
  },
  profileName: {
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
  },
  accountType: {
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },

  signOutContainer: {
    marginLeft: 16,
    padding: 12,
    width: 328,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  signOutText: {
    marginLeft: 16,
    color: "#E02D3C",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },
});
