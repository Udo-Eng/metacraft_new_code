// Implementing the Service Selection form
import React, { useState, useRef } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "../../../constants";
import BarberIcon from "../../../assets/services/Barber.svg";
import CarpenterIcon from "../../../assets/services/Carpenter.svg";
import HairStylistIcon from "../../../assets/services/HairStylists.svg";
import ElectricianIcon from "../../../assets/services/Electrician.svg";
import MakeUpArtistIcon from "../../../assets/services/MakeUpArtist.svg";
import MarketRunnerIcon from "../../../assets/services/MarketRunner.svg";
import PlumberIcon from "../../../assets/services/Plumber.svg";
import RecentCarpenterIcon from "../../../assets/services/Recents/Carpenter.svg";
import RecentPlumberIcon from "../../../assets/services/Recents/Plumber.svg";
import RecentElectricianIcon from "../../../assets/services/Recents/Electrician.svg";

export default ServiceSelectionForm = ({ label, onSelect }) => {
  const DropdownButton = useRef();
  const [selected, setSelected] = useState(undefined);
  //   const [dropdownTop, setDropdownTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const data = [
    {
      text: "Plumber",
      icon: () => <PlumberIcon width={24} height={24} />,
    },
    {
      text: "Carpenter",
      icon: () => <CarpenterIcon width={24} height={24} />,
    },
    {
      text: "Barber",
      icon: () => <BarberIcon width={24} height={24} />,
    },
    {
      text: "Electrician",
      icon: () => <ElectricianIcon width={24} height={24} />,
    },
    {
      text: "Hair Stylist",
      icon: () => <HairStylistIcon width={24} height={24} />,
    },
    {
      text: "Make-Up Artist",
      icon: () => <MakeUpArtistIcon width={24} height={24} />,
    },
    {
      text: "Market Runner",
      icon: () => <MarketRunnerIcon width={24} height={24} />,
    },
  ];

  let cardContainerStyles = [
    styles.cardContainer,
    { height: visible ? SIZES.height / 1.6 : 250 },
  ];

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  // function renderItem({ item }) {
  //   return (
  //     <Pressable onPress={() => onItemPress(item.text)}>
  //       <View style={styles.dropDownItem}>
  //         {item.icon()}
  //         <Text style={styles.dropDownText}>{item.text}</Text>
  //       </View>
  //     </Pressable>
  //   );
  // }

  const toggleDropdown = () => {
    setVisible((prevVisiblity) => !prevVisiblity);
  };

  const renderdropDownItem = () => {
    if (visible) {
      return (
        <>
          <View style={styles.dropdown}>
            <ScrollView>
              {data.map((item,index) => {
                return (
                  <Pressable key={index} onPress={() => onItemPress(item.text)}>
                    <View style={styles.dropDownItem}>
                      {item.icon()}
                      <Text style={styles.dropDownText}>{item.text}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
            {/* <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            /> */}
          </View>
        </>
      );
    }
  };

  return (
    <>
      <View style={cardContainerStyles}>
        <Text style={styles.title}>Hello arivee,</Text>
        <Text style={styles.subTitle}>what service do you require today?</Text>
        <Pressable
          style={styles.button}
          ref={DropdownButton}
          onPress={toggleDropdown}
        >
          {renderdropDownItem()}
          <Text style={styles.buttonText}>{label}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Pressable>
        {!visible && <Text style={styles.title}>Recent requests</Text>}
        {!visible && (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              padding: 10,
              paddingLeft: 0,
            }}
          >
            <View style={styles.recentItem}>
              <RecentCarpenterIcon width={24} height={24} />
              <Text style={styles.recentText}>Carpenter</Text>
            </View>
            <View style={styles.recentItem}>
              <RecentPlumberIcon width={24} height={24} />
              <Text style={styles.recentText}>Electrician</Text>
            </View>
            <View style={styles.recentItem}>
              <RecentElectricianIcon width={24} height={24} />
              <Text style={styles.recentText}>Plumber</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 132,
    height: 44,
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 4,
    marginHorizontal: 10,
  },
  recentText: {
    color: "#828282",
    marginLeft: 10,
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  dropDownItem: {
    width: SIZES.width < 400 ? 328 * 0.9 : 350 * 0.9,
    padding: 6,
    alignItems: "center",
    marginVertical: 4,
    flexDirection: "row",
    backgroundColor: "#FCFAFC",
    borderRadius: 4,
  },
  dropDownText: {
    marginLeft: 10,
    lineHeight: 16,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  title: {
    lineHeight: 26,
    fontWeight: "600",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  subTitle: {
    lineHeight: 26,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  cardContainer: {
    zIndex: 1,
    width: SIZES.width,
    padding: 12,
    paddingBottom: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: "#ffffff",
  },
  button: {
    marginTop: 12,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: SIZES.width < 400 ? 328 : 350,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#828282",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  buttonText: {
    flex: 1,
    textAlign: "left",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  dropdown: {
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#FAF9FD",
    width: SIZES.width < 400 ? 328 : 350,
    position: "absolute",
    backgroundColor: "#fff",
    top: 50,
  },
});
