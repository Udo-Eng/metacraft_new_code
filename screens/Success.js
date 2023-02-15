import Success from "../components/feedback/Success";
import { useEffect, useState } from "react";

const SuccessScreen = () => {
  const [title, setTitle] = useState("creating your account");

  useEffect(() => {
    setTimeout(() => {
      setTitle("Account created");
    }, 5000);
  }, []);

  return <Success title={title} />;
};

export default SuccessScreen;
