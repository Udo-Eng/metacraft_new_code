import { View,StyleSheet } from "react-native";
import React from "react";
import RadioButtonItem from "../../../components/ui/RadioButtonItem";

const Language = () => {
   
   
    const [checked, setChecked] = React.useState("English (UK)");


    const setCheckedHandler = (value) => {
        return () => setChecked(value);
    }


  const items = [
    {
      text: "English (UK)",
      onPressHandler: setCheckedHandler("English (UK)"),
    },
    {
      text: "English (US)",
      onPressHandler: setCheckedHandler("English (US)"),
    },
    {
        text: "Spanish",
        onPressHandler: setCheckedHandler("Spanish"),
    },
    {
        text : "French",
        onPressHandler: setCheckedHandler("French"),
    }
  ];

  return (
    <View style={styles.screen}>
      {items.map((item, index) => {
        return (
          <RadioButtonItem
            key={index}
            title={item.text}
            value={item.text}
            onPress={item.onPressHandler}
            checked={checked}
          />
        );
      })}
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 30,
    alignItems: "center",
  },
});
