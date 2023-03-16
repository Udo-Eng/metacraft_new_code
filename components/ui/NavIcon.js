import { Pressable,StyleSheet,View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NavIcon = ({ onPress }) => {
  return (
    <View style={styles.iconContainer}>
      <Pressable onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default NavIcon;


const styles = StyleSheet.create({
    iconContainer:{
        width: "100%",
        height: 50,
        alignItems:"flex-start",
        justifyContent:"center",
        marginVertical: 10,
    }
})
