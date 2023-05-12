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

const Dropdown = ({ label, data, onSelect,dropdownLabel ,tipInfo,linkText}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop((py + 30));
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onItemPress(item.label)}>
      <View style={styles.dropDownItem}>
        <Text style={styles.dropDownText}>{item.label}</Text>
      </View>
    </Pressable>
  );

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
    <Text style={styles.labelStyle}>{dropdownLabel}</Text>
    {tipInfo && <Text style={styles.tipInfo}>{tipInfo}<Text onPress={()=>{console.log("pressed")}}style={styles.linkText}>{linkText}</Text></Text>}
      <TouchableOpacity
        ref={DropdownButton}
        style={[styles.button, styles.dropDownContainer]}
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        <Text style={styles.buttonText}>
          {(selected && selected.label) || label}
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    tipInfo:{
        color: "#493B5D",
        lineHeight: 12,
        fontWeight: "500",
        fontStyle: "normal",
        // fontFamily:"Be Vietnam"
        fontSize: 10,
        marginVertical: 5,
    },
    linkText:{
        textDecorationLine: "underline",
        color: "#8C44EE",
        lineHeight: 12,
        fontWeight: "400",
        fontStyle: "normal",
        // fontFamily:"Be Vietnam"
        fontSize: 10,
    },
  dropDownOuterContainer:{
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
