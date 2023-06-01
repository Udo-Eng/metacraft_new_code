import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { COLORS } from "../../constants";

const AddNewCard = ({ navigation }) => {

  const [cardNo, setCardNo] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");


  const handleSubmit = (e) => {
    return  navigation.navigate("Debit Cards",{
      cardNo,
      date,
      cvv,
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Card Number</Text>
        <TextInput
          value={cardNo}
          onChangeText={setCardNo}
          keyboardType="numeric"
          style={styles.input}
          placeholder="xxxx xxxx xxxx xxxx"
        />
      </View>



      <View style={styles.flexContainer}>
        <View style={(styles.cardContainer, { width: "45%" })}>
          <Text style={styles.title}>Exp. date</Text>
          <TextInput
            value={date}
            onChangeText={setDate}
            keyboardType="numeric"
            style={styles.input}
            placeholder="MM/YY"
          />
        </View>
        <View style={(styles.cardContainer, { width: "45%" })}>
          <Text style={styles.title}>CVV</Text>
          <TextInput
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            style={styles.input}
            placeholder="024"
          />
        </View>
      </View>
        <PrimaryButton onPress={(e) => handleSubmit(e)}>
          Save Card
        </PrimaryButton>
    </View>
  );
};

export default AddNewCard;

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
    // width: '100%'
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 48,
  },
});
