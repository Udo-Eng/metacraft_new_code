import { View,StyleSheet} from 'react-native';
import React from 'react';
import LogoIcon from "../../assets/Logo.svg";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
        {/* <Image source={require("../../assets/word.png")} /> */}
        <LogoIcon  width={135}  height={30} />
      </View>
  )
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
});

export default Logo;