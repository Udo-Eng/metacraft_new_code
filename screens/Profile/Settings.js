import { View, Text, StyleSheet ,Pressable} from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import NavLinkIcon from "../../components/Profile/NavLinkIcon";

const Settings = ({navigation }) => {

    const navLinksData = [
        {
          text: "Notifications",
          icon: () => <Ionicons name="ios-notifications-outline" size={24} color="#420D8B" />,
          handler: function () { navigation.navigate("notifications"); },
        },
        {
          text: "Language",
          icon: () => <MaterialIcons name="language" size={24} color="#420D8B" />,
          handler: function () { navigation.navigate("language"); },
        },
        {
          text: "Security",
          icon: () => <MaterialIcons name="security" size={24} color="#420D8B" />,
          handler: function () { navigation.navigate("security"); },
        },
      ];


  return (
    <View style={styles.screen}>
       {
         navLinksData.map((link,index)=>{
            return (
                <NavLinkIcon key={index}  icon={link.icon} linkText={link.text} onPress={link.handler} />
            );
         })
      }  
    </View>
  )
}

export default Settings;



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:"flex-start",
        paddingLeft: 16,
        paddingRight: 30,
        alignItems: "center",
      },
});