import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../../constants";
import CardIcon from "../../assets/fundWallet/NewFundWalletSvg/fundwallet/Card.svg";
import TransferIcon from "../../assets/fundWallet/NewFundWalletSvg/fundwallet/Transfer.svg";




const FundYourWallet = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          How would you like to fund your wallet
        </Text>
        <Pressable onPress={() => navigation.navigate("Debit Cards")}>
          <View style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <CardIcon width={24} height={24} />
          </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardNo}>Fund wallet with debit card</Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Transfer to Wallet")}>
          <View style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <TransferIcon width={24} height={24} />
          </View>
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
    padding: 18,
    marginTop: 22,
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
    flexDirection: "row",
    marginBottom: 24,
    backgroundColor: COLORS.cardContainerColor,
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
    borderRadius: 12,
  },
  iconContainer: {
    marginRight: 12,
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
