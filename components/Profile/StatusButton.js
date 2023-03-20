import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const StatusButton = () => {
    return (
      <View style={styles.statusBtn}>
        <Text style={styles.statusText}>Not Verified</Text>
      </View>
    );
  }
export default StatusButton;


const styles = StyleSheet.create({
    statusBtn: {
        marginRight: 10,
        backgroundColor: "#BA2532",
        width: 72,
        height: 28,
        borderRadius: 56 / 2,
        alignItems:"center",
        justifyContent:"center",
      },
      statusText: {
        textAlign: "center",
        color: "#fff",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 10,
      }, 
});