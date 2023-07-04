import React, { useRef, useState } from "react";
import { SIZES } from "../../constants";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Begining of the dropdown Component
const Dropdown = ({
  label,
  data,
  onSelect,
  dropdownLabel,
  userDefinedLabelStyle,
  tipInfo,
  linkText,
}) => {
  const DropdownButton = useRef();

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  defaultLabelStyle = [styles.labelStyle,userDefinedLabelStyle];

  const openDropdown = () => {
    /*
    The measure method on a native component 
      Determines the location on screen, width, 
      and height in the viewport of the given view 
      and returns the values via an async callback.


    */

    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      // Console logging the output of the position of the dropdown Button on the screen
      // Parameters passed to the callback function are (x, y, width, height, pageX, pageY)

      setDropdownTop(py + 30);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    // Updates the state to be displayed on the button UI
    setSelected(item);

    // Updates the state to be passed to the parent Ui component.
    onSelect(item);

    // Toggle the Modal off after setting the Modal Values
    setVisible(false);
  };

  // Function to render each dropdown Item
  const renderItem = ({ item }) => (
    <Pressable onPress={() => onItemPress(item)}>
      <View style={styles.dropDownItem}>
        {/* An IIFE function to conditional render an Item  */}
        {(() => {
          if (item.label) {
            return <Text>{item.label}</Text>;
          } else {
            return <Text style={styles.dropDownText}>{item}</Text>;
          }
        })()}
      </View>
    </Pressable>
  );

  // Function to render the Dropdown List Ui
  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.dropDownOuterContainer}>
      <Text style={defaultLabelStyle}>{dropdownLabel}</Text>
      {tipInfo && (
        <Text style={styles.tipInfo}>
          {tipInfo}
          <Text
            onPress={() => {
              // TODO LATER pass a function to navigate to more info screen
              console.log("pressed");
            }}
            style={styles.linkText}
          >
            {linkText}
          </Text>
        </Text>
      )}
      <TouchableOpacity
        ref={DropdownButton}
        style={[styles.button, styles.dropDownContainer]}
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        <Text style={styles.buttonText}>
          {/* TODO LATER IMPLEMENT THE SERVICES LIST SELECTION DROP DOWN */}
          {(selected && selected.label) || label}
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tipInfo: {
    color: "#493B5D",
    lineHeight: 12,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 11,
    marginVertical: 5,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#8C44EE",
    lineHeight: 12,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 11,
  },
  dropDownOuterContainer: {
    marginTop: 26,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    zIndex: 1,
  },
  dropDownContainer: {
    borderColor: "#E0E0E0",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  labelStyle: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  buttonText: {
    flex: 1,
    textAlign: "left",
    // Added this make the drop down color grey
    color: "#828282",
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    left: 30,
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: SIZES.width < 400 ? 328 * 0.9 : 350 * 0.9,
    height: "80%",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
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
});

export default Dropdown;
