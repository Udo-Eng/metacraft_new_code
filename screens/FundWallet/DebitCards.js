import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";

const DebitCards = ({ navigation }) => {
  const card = [];
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.navigate("Fund Account")}>
        <View style={styles.cardContainer}>
          <Image />
          <View style={styles.textContainer}>
            <Text style={styles.cardNo}>
              **** **** **** 1234
            </Text>
            <Text style={styles.date}>Exp. 09/25</Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Add New Card")}>
        <View style={styles.cardContainer}>
          <Image />
          <View style={styles.textContainer}>
            <Text style={styles.cardNo}>Add New Card</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default DebitCards;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
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
