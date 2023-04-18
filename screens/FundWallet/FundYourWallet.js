import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../../constants";

const FundYourWallet = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          How would you like to fund your wallet
        </Text>
        <Pressable onPress={() => navigation.navigate("Debit Cards")}>
          <View style={styles.cardContainer}>
            <Image />
            <View style={styles.textContainer}>
              <Text style={styles.cardNo}>Fund wallet with debit card</Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Transfer to Wallet")}>
          <View style={styles.cardContainer}>
            <Image />
            <View style={styles.textContainer}>
              <Text style={styles.cardNo}>Transfer to wallet</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FundYourWallet;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    width: '60%',
    lineHeight: 23,
    marginBottom: 24
  },
  cardContainer: {
    marginBottom: 24,
    backgroundColor: COLORS.cardContainerColor,
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  cardNo: {
    color: COLORS.selectionText,
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 4,
  },
  date: {
    color: "#828282",
    fontSize: 12,
    fontWeight: "400",
  },
});
