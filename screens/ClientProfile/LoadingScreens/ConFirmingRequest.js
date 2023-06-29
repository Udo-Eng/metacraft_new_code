import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { useEffect, useState } from "react";

const ConfirmingRequestScreen = ({ navigation }) => {
  /*
    Title 2
request Confirmed successfully

// Design 2 extra Data 
    The Artisian will reach out to you in a bit. 
If urgent, you can check your order to see the artisian’s details

// When the Request was confirmed Succesfully
The Artisian will reach out to you in a bit. 
If urgent, you can check back your order to see the artisian’s details

    */

  const [title, setTitle] = useState("Confirming Request");
  const [subTilte, setSubTitle] = useState(
    "The Artisian will reach out to you in a bit. If urgent, you can check your order to see the artisian’s details"
  );
  const [imagePath,setImagePath] = useState("../../../assets/Loading/LoadingImage.png");
  

  useEffect(() => {
    

    // send the post request  to confrm The users request before confirming the request and updating the UI

    // if success display request Confirmed successfully

    // else navigate back to confirm request screen  and display  and error occured 

    setTimeout(() => {
      setTitle("Request Confirmed successfully");
      setSubTitle(
        "The Artisian will reach out to you in a bit.  If urgent, you can check back your order to see the artisian’s details"
      );
      setImagePath('../../../assets/feedback/success.png');
      setTimeout(() => {
        // navigation.replace("signin");
        console.log('navigate to confirm screen');
      }, 500);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={require("../../../assets/Loading/LoadingImage.png")} />
      <Text style={styles.infoTip}>{subTilte}</Text>

      <PrimaryButton onPress={() => {}} btnStyle={styles.btnStyle}>
        <Text>View Order details</Text>
      </PrimaryButton>
    </View>
  );
};

export default ConfirmingRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnStyle:{
    width: 200,
    height: 42,
  },
  title:{
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
  },
  infoTip:{
    width: 314,
    textAlign: 'center',
  }
});
