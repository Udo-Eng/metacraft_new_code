import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
// import { AntDesign } from "@expo/vector-icons";
// import {COLORS} from "../../constants";
import StatusButton from "../../components/Profile/StatusButton";
import NavLinkImage from "../../components/Profile/NavLinkImage";
import ProfileImage from "../../components/Profile/ProfileImage";


const navLinksData = [
  {
    text: "Personal Information",
    icon: require("../../assets/NavIcons/Person.png"),
    handler: function () {},
  },
  {
    text: "Refer and Earn!",
    icon: require("../../assets/NavIcons/Gift.png"),
    handler: function () {},
  },
  {
    text: "ID Verification",
    icon: require("../../assets/NavIcons/ID.png"),
    handler: function () {},
  },
  {
    text: "Settings",
    icon: require("../../assets/NavIcons/Gear.png"),
    handler: function () {},
  },
  {
    text: "Help and Support",
    icon: require("../../assets/NavIcons/Help.png"),
    handler: function () {},
  },
];


const ArtisianProfile = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ProfileImage profileText={"AT"}/>
      <Text style={styles.profileName}>Airspire Technologies</Text>
      <Text style={[styles.accountType,{marginBottom: 40}]}>Artisan account</Text>
      {navLinksData.map((link, index) => {
        return (
          <NavLinkImage
            key={index}
            iconPath={link.icon}
            linkText={link.text}
            onPress={link.handler}
            StatusButton={index === 2 ? StatusButton : null}
          />
        );
      })}
      <View style={styles.signOutContainer}>
        <Image  style={styles.imageIcon} source={require("../../assets/NavIcons/Exit.png")} />
        <Text style={styles.signOutText}>Sign out</Text>
      </View>
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
  copy:{
    color:"#D8CBE7",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
  },
  profileName:{
    color:"#221B38",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
  },
  accountType:{
    color: "#221B38",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  },
  imageIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  signOutContainer:{
    marginLeft: 16,
    padding: 12,
    width: 328,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  signOutText:{
    color: "#E02D3C",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 18,
  }

});
