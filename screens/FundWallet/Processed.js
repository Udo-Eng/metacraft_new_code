import { useEffect, useState } from "react";
import { View } from "react-native";
import ProcessedPage from "../../components/fundWallet/Processed";
import PrimaryButton from "../../components/ui/PrimaryButton";

const Processed = () => {
    const [title, setTitle] = useState('Request processing');
    const [image, setImage] = useState(require('../../assets/fundWallet/processing.png'));
    const [note, setNote] = useState('Checking request terms');
    
    
    useEffect(()=> {
        setTimeout(() => {
            setTitle("Funding processed");
            setNote("Your withdrawal has been processed and your funds will be sent to you");
            setImage(require('../../assets/fundWallet/checked.png'))
        }, 3000);
    })
  return (
    <View>
      <ProcessedPage
        title={title}
        note={note}
        image={image}
      ></ProcessedPage>
      <PrimaryButton>Back to home</PrimaryButton>
    </View>
  );
};

export default Processed;
