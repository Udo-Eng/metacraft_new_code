import { View, Text ,StyleSheet} from 'react-native';
import React from 'react';
import {Switch} from "react-native-paper";

const SwitchItem = ({title}) => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{title}</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  )
}

export default SwitchItem;


const styles = StyleSheet.create({
    itemContainer:{
        marginLeft: 16,
        padding: 12,
        width: 328,
        height: 58,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
    },
    text:{
        color: "#221B38",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 18,
    }
})