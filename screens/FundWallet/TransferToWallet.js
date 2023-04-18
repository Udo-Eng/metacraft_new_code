import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../constants";

const TransferToWallet = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
      
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Bank Name</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={styles.cardContainer, {marginBottom: 40}}>
        <Text style={styles.title}>Account Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default TransferToWallet;

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
