import { View, Text , Pressable,StyleSheet} from 'react-native';
import React from 'react';
import {COLORS,SIZES} from "../../constants";

function NextButton({ title,onPress }) {
    return (
      <Pressable
        android_ripple={{ color: COLORS.backgroundColor }}
        style={({ pressed }) => {
          return pressed ? [styles.pressed] : [];
        }}
        onPress={onPress}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    );
  }


const styles = StyleSheet.create({
    buttonStyle: {
        width: SIZES.width < 400 ? 300 : 350,
        height: 44,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.primaryColor,
        borderRadius: 4,
      },
      buttonText: {
        color: "#420D8B",
        textAlign: "center",
      },
      pressed: {
        opacity: 0.75,
      },
})

export default NextButton;