import { Text, View, StyleSheet, Image } from "react-native";

// This is a transaction details component

const TransactionDetails = ({ transaction }) => {

  transaction = {
    description: "Funds Transfer(009221283)",
    date: "19 September 2022",
    icon: require("../../assets/fundWallet/wallet_2.png"),
    amount: "N+4000",
    status: "Successful",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction details</Text>
      <View style={styles.descContainer}>
        <Image style={styles.imageStyle} source={transaction.icon} />
        <View>
          <Text style={styles.desc}>{transaction.description}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      </View>

      {/* The Amount container  */}
      <Text style={styles.amount}>{transaction.amount}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Status</Text>
        <View style={styles.innerStatusContainer}>
          <View style={styles.dot}></View>
          <Text style={[styles.statusLabel, styles.status]}>
            {transaction.status}
          </Text>
        </View>
      </View>
    </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 24,
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 328,
    height: 48,
  },
  imageStyle: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  title: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 23,
    color: "#221B38",
    textAlign: "left",
    marginBottom: 24,
  },
  DescTextContainer: {
    flexDirection: "column",
    flex: 1,
  },
  statusContainer: {
    marginTop: 24,
    flexDirection: "row",
    width: 328,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerStatusContainer: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
  },
  desc: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    color: "#221B38",
    textAlign: "left",
    marginBottom: 5,
  },
  date: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: "#221B38",
    textAlign: "left",
  },
  amount: {
    // fontFamily: "Be Vietnam",
    marginTop: 24,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 23,
    color: "#221B38",
  },
  statusLabel: {
    // fontFamily: "Be Vietnam",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#221B38",
  },
  status: {
    color: "#08875D",
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#08875D",
    borderRadius:6 / 2,
    marginRight: 2,
  },
});

export default TransactionDetails;
