import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList
} from "react-native";
import { COLORS } from "../../constants";
import { walletHistory } from "../../data/fundWallet";
import WalletIcon from "../../assets/NavIcons/MenuNav/Wallet.svg";
import HomeIcon from "../../assets/NavIcons/MenuNav/HomePage.svg";


const Wallet = ({ navigation }) => {
  function navigateToTransactionDetails() {
    navigation.navigate("TransactionDetails");
  }

  function TransactionItem({item}) {
    
    return (
      <Pressable onPress={navigateToTransactionDetails}>
        <View style={styles.detail}>
          <View style={styles.leftSection}>
            <Image source={item.image} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <Text>{item.amount}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* HEADER SECTION */}
        <View style={styles.headerContainer}>
          <View style={{ textAlign: "center" }}>
            <Text style={styles.amount}>N16,800</Text>
            <Text style={styles.text}>Current Blance</Text>
          </View>
          <View style={styles.btn}>
            <Pressable onPress={() => navigation.navigate("Fund Your Wallet")}>
              <View style={styles.withDrawBtn}>
                {/* WALLET ICON */}
                <WalletIcon width="24" height="24" />
                <Text style={styles.withdrawText}>Fund wallet</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Withdraw")}>
              <View style={styles.withDrawBtn}>
                {/* WALLET ICON */}
                <HomeIcon width="24" height="24" />
                <Text style={styles.withdrawText}>Withdraw</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* WALLET HISTORY SECTION */}
        
        
        <Text style={styles.ListTitle}>Wallet History</Text>
          <FlatList 
           data={walletHistory}
           renderItem={TransactionItem}
           keyExtractor={(item) => item.id}
          />
          
          {/* <ScrollView
            style={styles.scrollView}
            // showsVerticalScrollIndicator={false}
          >

            {walletHistory.map((history, index) => {
              return (
                <Pressable key={index} onPress={navigateToTransactionDetails}>
                  <View style={styles.detail}>
                    <View style={styles.leftSection}>
                      <Image source={history.image} />
                      <View style={{ marginLeft: 12 }}>
                        <Text style={styles.textTitle}>{history.title}</Text>
                        <Text style={styles.date}>{history.date}</Text>
                      </View>
                    </View>
                    <Text>{history.amount}</Text>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems:"flex-start",
    paddingTop: 16,
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: COLORS.walletHeader,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 21,
    marginTop: 8,
    marginBottom: 26,
    width: "100%",
    height: 165,
  },
  amount: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.selectionText,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.selectionText,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  withDrawBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 132,
    height: 44,
    backgroundColor: "#F1E8FD",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#7E60A7",
  },
  withdrawText: {
    textAlign: "left",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    color: "#420D8B",
  },
  walletHistory: {
 
    width: "100%",
  },
  ListTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "left"
  },
  detail: {
    flexDirection: "column",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
  },
  // scrollView: {
  //   marginBottom: 50,
  //   flex: 1,
  // },
});
