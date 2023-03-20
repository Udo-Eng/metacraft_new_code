import { View, Text ,StyleSheet} from "react-native";
import React from "react";
import {COLORS} from "../../constants";

const ProfileImage = ({profileText}) => {
  return (
    <View style={styles.profileImg}>
      <Text style={styles.profileImageText}>{profileText}</Text>
    </View>
  );
};

export default ProfileImage;


const styles = StyleSheet.create({
    profileImg:{
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginVertical: 16,
        backgroundColor: "#F1E8FD",
        alignItems:"center",
        justifyContent:"center",
      },
      profileImageText:{
        // fontFamily: "Be Vietnam",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 32,
        lineHeight: 47,
        color: COLORS.primaryColor,
      }, 
})
