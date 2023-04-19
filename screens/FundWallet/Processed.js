import { useEffect, useState } from "react";
import { View } from "react-native";
import ProcessedPage from "../../components/fundWallet/Processed";


const Processed = () => {

    const [title, setTitle] = useState('Request processing');
    const [image, setImage] = useState(require('../../assets/fundWallet/processing.png'));
    const [note, setNote] = useState('Checking request terms');

    
    
    
    // Timer set up to imitatea network request 
    useEffect(()=> {
        setTimeout(() => {
            setTitle("Funding Successful");
            setNote("Your wallet has been funded");
            setImage(require('../../assets/fundWallet/checked.png'))
        }, 3000);
    })


  return (


    <View>
      <ProcessedPage
        title={title}
        note={note}
        image={image}
      />
    </View>
  );


};

export default Processed;
