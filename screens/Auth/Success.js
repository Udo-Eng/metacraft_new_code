import Success from "../../components/feedback/Success";
import { useEffect, useState } from "react";

const SuccessScreen = ({navigation}) => {
  
  const [title, setTitle] = useState("creating your account");

  useEffect(() => {
    // Todo  

    // send the post request with user credentials 

    // if success display account created 

    // else navigate back to signup page and display account not created  
    
    setTimeout(() => {
      setTitle("Account created");
      setTimeout(() => {
        navigation.replace("signin");
      }, 500)
    }, 5000);
  }, []);

  return <Success title={title} />;
};

export default SuccessScreen;
