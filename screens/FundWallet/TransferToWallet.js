import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../constants";
import CopyIcon from "../../assets//CopyIcon.svg";

const TransferToWallet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Bank Name</Text>
        <TextInput value="Wema Bank" style={styles.input} />
      </View>

        <Text style={styles.title}>Account Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.copyInput}
            placeholder="8899827361"
            placeholderTextColor={"#221B38"}
            cursorColor="#000000"
          />
          {/* <Image source={require("../../assets/copyImage.png")} style={{width: 24, height: 24}}/> */}
          <CopyIcon width={24} height={24} />
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

  inputContainer: {
    borderColor: "#E0E0E0",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 4,
    height: 44,
    padding: 10,
    flexDirection: "row",
    marginBottom: 23,
  },

  copyInput: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
    
  },

});
