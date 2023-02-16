import { View,Image,StyleSheet} from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
        <Image source={require("../../assets/word.png")} />
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
})

export default Logo;