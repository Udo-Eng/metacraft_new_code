import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import SVGImg from '../../assets/NavIcons/menu.svg';

const MenuBarLogo = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.menuContainer}>
        <SVGImg
          width="24"
          height="24"
        />
      </View>
    </Pressable>
  );
};

export default MenuBarLogo;

const styles = StyleSheet.create({
  menuContainer: {
    width: 45,
    height: 45,
    backgroundColor: "#420D8B",
    borderRadius: 45 / 2,
    alignItems:"center",
    justifyContent:"center"
  },
});
