import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable,ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { ClientInput } from "../../../components/ui/ClientInput";

const SubmitBid = ({ route, navigation }) => {
  // const navigation = useNavigation();
  const { address, sub_service } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Client's  Location Preview   */}
      <ClientInput
        text="Location"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <Text style={styles.inputText}>{address}</Text>
      </ClientInput>

      {/* Sub Service requested Input  */}
      <ClientInput
        text="Sub Service requested"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <TextInput style={styles.inputText} placeholder={sub_service} />
      </ClientInput>

      {/*   Time Duration Input  */}
      <ClientInput
        text="Duration"
        inputBorder={styles.inputBorder}
        container={styles.inputContainer}
      >
        <TextInput
          style={styles.inputText}
          placeholder="How many days or hours?"
        />
      </ClientInput>


      {/* Price range  input container */}
      
      <View style={styles.priceRangeContainer}>
        <Text>Price range</Text>
        <Text style={styles.paragraph}>
          This is an estimated cost for workmanship
        </Text>
        <View style={styles.prices}>
          <TextInput style={styles.priceInput} placeholder="N" cursorColor={'#000'}/>
          <View style={styles.inputSeparator}></View>
          <TextInput style={styles.priceInput} placeholder="N" cursorColor={'#000'}/>
        </View>
      </View>

      {/* Submit  Bid  Button  */}

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Bid Sent")}
        >
          <Text style={styles.btnText}>Submit Bid</Text>
        </Pressable>
      </View>


    </ScrollView>
  );
};

export default SubmitBid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBorder: {
    borderColor: "#e0e0e0",
    backgroundColor: "#faf9fd",
  },



  btnContainer: {
    width: 350,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 68,
  },

  btn: {
    width: "60%",
    borderRadius: 4,
    backgroundColor: "#420d8b",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#f1e8fd",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    paddingVertical: 12,
  },


  // PRICE RANGE CONTAINER STYLES 
  prices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },


  priceRangeContainer:{
    marginBottom: 20,
  },
  
  paragraph: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: "#828282",
    marginTop: 8,
    marginBottom: 16,
  },

  inputText: {
    color: "#221b38",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
 
  },
  priceInput:{
    padding: 4,
    color: "#221b38",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#e0e0e0",
    backgroundColor: "#faf9fd",
    width: 150,
    height: 44,
  },
  inputSeparator:{
    width:10,
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 5,
  }

});
