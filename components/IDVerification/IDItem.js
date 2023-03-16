import { View, Text, StyleSheet ,Pressable ,Image} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const IDItem = ({ item, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress} style={style.itemContainer}>
        <Text style={StyleSheet.text}>{item}</Text>
        <AntDesign name="right" size={16} color="#4E6458" />
      </Pressable>
    </View>
  );
};


const style = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12, 
    paddingBottom: 20,
  },
  image: {
    width: 10,
    height: 10,
  },
  text: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    marginBottom: 10,
    color: "#4E6458",
  },
});


export default IDItem;