import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { walletOptions } from "../../data/fundWallet";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.amount}>N16,800</Text>
        <Text style={styles.text}>Current Balance</Text>
        <View style={styles.options}>
          {walletOptions.map((option,index) => {
            return (
              <View key={index} style={styles.optionContainer}>
                <View style={styles.imgContainer}>
                  {option.icon()}
                </View>
                <Pressable onPress={() => navigation.navigate(option.link)}>
                  <Text style={styles.optionText}>{option.text}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    width: SIZES.width,
    padding: 16,
    paddingTop: 23,
    height: 213,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // marginTop:23,
  },
  amount: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
    color: "white",
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 32,
    color: "white",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionContainer: {
    alignItems: "center",
  },
  imgContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 12,
    fontWeight: "400",
    width: 69,
    color: "white",
    textAlign: "center",
    lineHeight: 18
  },
});
