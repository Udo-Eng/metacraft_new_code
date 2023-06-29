import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useState } from "react";
import CancelRequest from "../../../components/Requests/NormalRequests/CancelRequest";

const FindingArtisianScreen = ({ navigation }) => {
  const [visible, setIsVisible] = useState(false);

  function toggleModal() {
    setIsVisible(true);
  }

 function  closeModal(){
  setIsVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looking for a Hairstlist near you</Text>
      <Image source={require("../../../assets/Loading/LoadingImage.png")} />
      <Button title="Click me" onPress={toggleModal}/>
      <CancelRequest open={visible} closeModal={closeModal}/>
    </View>
  );
};

export default FindingArtisianScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  title: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  infoTip: {
    width: 314,
    textAlign: "center",
  },
});
