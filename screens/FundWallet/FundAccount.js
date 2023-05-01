import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import PasswordInput from "../../components/ui/PasswordInput";
import { COLORS } from "../../constants";
import { useIsFocused } from "@react-navigation/native";

const FundAccount = ({ navigation,route }) => {

  let isFocused = useIsFocused();

 function handleFormSubmit (){

  if(isFocused){
    let card = route.params.card;
  }

  //send a funding request to the backend with the users details 

  // Navigate to the processed page
  navigation.navigate("Processed",{
    action:"fundaccount"
  });



}

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Amount</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.title}>Note to Metacraft (optional)</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={[styles.cardContainer, {marginBottom: 40}]}>
        <PasswordInput 
        label="Enter your Metacraft Password"
        LabelStyle={{color: "#221B38",opacity: 1}}
        />
      </View>
      <PrimaryButton onPress={handleFormSubmit}>
        Fund Account
      </PrimaryButton>
    </View>
  );
};

export default FundAccount;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
  },
  cardContainer: {
    marginBottom: 23,
  },
  title: {
    color: COLORS.selectionText,
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 44,
    paddingLeft: 16,
    borderColor: "#E0E0E0",
    borderRadius: 4,
  },
});
