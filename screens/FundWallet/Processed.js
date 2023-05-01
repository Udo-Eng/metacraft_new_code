import { useEffect, useState } from "react";
import { View } from "react-native";
import ProcessedPage from "../../components/fundWallet/Processed";
import { useIsFocused } from "@react-navigation/native";

const Processed = ({ route }) => {
  const [title, setTitle] = useState("Request processing");
  const [image, setImage] = useState(
    require("../../assets/fundWallet/processing.png")
  );
  const [note, setNote] = useState("Checking request terms");

  let isFocused = useIsFocused();

  // Timer set up to imitate network request
  useEffect(() => {
    if (isFocused) {
      const action = route.params.action;

      if (action === "withdraw") {
        setTimeout(() => {
          setTitle("Withdrawal processed");
          setNote(
            "Your withdrawal has been processed and your funds will be sent to you"
          );
          setImage(require("../../assets/fundWallet/checked.png"));
        }, 3000);
      } else if(action === "fundaccount"){
        setTimeout(() => {
          setTitle("Funding Successful");
          setNote("Your wallet has been funded");
          setImage(require("../../assets/fundWallet/checked.png"));
        }, 3000);
      }
    }
  }, [isFocused]);

  return (
    <View>
      <ProcessedPage title={title} note={note} image={image} />
    </View>
  );
};

export default Processed;
