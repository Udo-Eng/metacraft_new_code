import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { COLORS } from "../../constants";

const FundAccount = ({ navigation }) => {
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
      <View style={styles.cardContainer, {marginBottom: 40}}>
        <Text style={styles.title}>Enter your Metacraft Password</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <PrimaryButton onPress={() => navigation.navigate("Processed")}>
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
