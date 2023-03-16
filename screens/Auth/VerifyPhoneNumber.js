import {
  Text,
  Pressable,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import NumberInput from "../../components/ui/NumberInput";
import { useState, useRef, useEffect } from "react";

const VerifyPhoneNumber = () => {
  const navigation = useNavigation();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");

  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);

  useEffect(() => {
    function focusOnInput() {
      if (num1.length === 1) {
        input2.current.focus();
      }
    }

    focusOnInput();
  }, [num1]);

  useEffect(() => {
    function focusOnInput() {
      if (num2.length === 1) {
        input3.current.focus();
      }
    }
    focusOnInput();
  }, [num2]);

  useEffect(() => {
    function focusOnInput() {
      if (num3.length === 1) {
        input4.current.focus();
      }
    }
    focusOnInput();
  }, [num3]);

  useEffect(() => {
    function focusOnInput() {
      if (num4.length === 1) {
        input5.current.focus();
      }
    }
    focusOnInput();
  }, [num4]);


  function onSubmitHandler(){
      let verifyNumber = `${num1}${num2}${num3}${num4}${num5}`;


      // TODOS

      // Send a post request to backend 

      // if the responds is sucessful

      // route the user to Login screen 

      // else remain on screen and display verfication number  is invalid 
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/word.png")} />
        </View>
        <Text style={styles.title}>
          Verify <Text style={styles.link}>Phone</Text>
        </Text>

        <View style={styles.verifyInstructionContainer}>
          <Text style={styles.verifyInstructions}>
            Enter the code sent to your phone number to verify and create
            account
          </Text>
        </View>

        {/* INPUTS  */}

        <View style={styles.numberInputsContainer}>
          <NumberInput onChangeText={setNum1} />
          <NumberInput ref={input2} onChangeText={setNum2} />
          <NumberInput ref={input3} onChangeText={setNum3} />
          <NumberInput ref={input4} onChangeText={setNum4} />
          <NumberInput ref={input5} onChangeText={setNum5} />
        </View>

        <Pressable
          onPress={() => {
            navigation.replace("success");
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Verify and Create Account</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // fontFamily: 'Be Vietnam',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "left",
    width: "100%",
    marginTop: 30,
    marginBottom: 8,
  },
  verifyInstructionContainer: {
    width: 300,
    height: 60,
    padding: 2,
  },
  verifyInstructions: {
    color: "#4E6458",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    opacity: 0.9,
  },
  numberInputsContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    width: SIZES.width < 400 ? 320 : 350,
    height: 44,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderVertical: 16,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 4,
  },
  buttonText: {
    color: COLORS.backgroundColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: COLORS.primaryColor,
  },
});

export default VerifyPhoneNumber;
