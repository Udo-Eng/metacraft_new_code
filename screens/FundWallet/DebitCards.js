import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";
import CardIcon from "../../assets/fundWallet/NewFundWalletSvg/fundwallet/Card.svg";
import AddIcon from "../../assets/fundWallet/NewFundWalletSvg/fundwallet/Add.svg";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

function getLastFourDigits(cardNo) {
  return cardNo.toString().split("").slice(12, 16).join("");
}

let initialCardsState = [
  { cardNo: "1234", date: "09/25" },
  { cardNo: "1234", date: "09/25" },
];

// CARD  COMPONENT
function CardComponent({ card }) {

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Fund Account", {
          card: card,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <CardIcon width={24} height={24} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardNo}>**** **** **** {card.cardNo}</Text>
          <Text style={styles.date}>Exp. {card.date}</Text>
        </View>
      </View>
    </Pressable>
  );
}

//  DEBIT CARDS COMPONENT

const DebitCards = ({ navigation, route }) => {
  let isFocused = useIsFocused();

  const [cards, setCards] = useState(initialCardsState);

  useEffect(() => {

    if (isFocused) {
      let newCard = route.params;

      if (newCard != undefined) {
       
        newCard.cardNo = getLastFourDigits(newCard.cardNo);

        if(cards.find((card) => { return card.cardNo === newCard.cardNo})){
          return ;
        }else{
          setCards(() => [...cards, newCard]);
        }     
      }
    }
  }, [isFocused]);

  console.log(cards);

  return (
    <View style={styles.container}>

      {cards.map((card,index) => {
       return <CardComponent card={card} key={index} />;
      })}
      <Pressable onPress={() => navigation.navigate("Add New Card")}>
        <View style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <AddIcon width={24} height={24} />
          </View>
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
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    marginBottom: 24,
    backgroundColor: COLORS.cardContainerColor,
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    flexDirection: "row",
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
  textContainer: {},
});
