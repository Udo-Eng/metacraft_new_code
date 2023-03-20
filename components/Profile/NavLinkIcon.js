import { View, Text, StyleSheet ,Pressable} from "react-native";
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


const NavLinkIcon = ({ icon, linkText, onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.navLinkContainer}>
          <View style={styles.navLeft}>
            <View style={styles.iconContainer}>
              {icon()}
            </View>
            <Text style={styles.linkText}>{linkText}</Text>
          </View>
          <View style={styles.navRight}>  
            <AntDesign name="right" size={16} color="#E0E0E0" />
          </View>
        </View>
      </Pressable>
    );
  };


const styles = StyleSheet.create({
    navLinkContainer: {
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
      iconContainer:{
        backgroundColor:"#FAF9FD",
        width: 40,
        height: 40,
        marginRight: 16,
        alignItems: "center",
        justifyContent:"center", 
      },
      linkText:{
        color: "#221B38",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 18,
      },
      navLeft:{
        flexDirection: "row",
         alignItems:"center",
         justifyContent: "center",
      },
      navRight:{
         alignItems: "flex-end",
         flexDirection: "row",
         justifyContent:"center"
      },
});


export default NavLinkIcon;