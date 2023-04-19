import { TextInput, View, Text, StyleSheet ,Pressable} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState}  from 'react';
import {COLORS}  from "../../constants"



const PasswordInput = ({
  label,
  textInputConfig,
  LabelStyle,
  inputStyle,
  invalid,
}) => {

  // Set all the default styles for the application 

  const inputLabelStyle = [
    styles.inputLabel,
    LabelStyle,
    invalid ? styles.labelError : null,
  ];
  const defaultInputStyle = [
    styles.input,
    inputStyle,
    invalid ? styles.inputError : null,
  ];

  const defaultContainerStyle = [
    styles.inputContainer,
    invalid ? styles.inputError : null,
  ];


   //register  state to toggle visible eye on or off
   const [displayPassword, setDisplayPassword] = useState(false);

 
   const toggleDisplayPasswordHandler = () => {
     setDisplayPassword((prevState) => !prevState);
   };
 
   // function to  hide  password  and display eye-off icon
   function displayEyeOff() {
     return (
       <Pressable onPress={toggleDisplayPasswordHandler}>
         <Ionicons name="eye-off" size={24} color={COLORS.darkBlue} />
       </Pressable>
     );
   }
 
   // function to display off eye
   function displayEye() {
     return (
       <Pressable onPress={toggleDisplayPasswordHandler}>
         <Ionicons name="eye" size={24}  color={COLORS.darkBlue} />
       </Pressable>
     );
   }
 
   let eyeIcon = displayPassword ?  displayEyeOff() :  displayEye();



  return (
    <View style={styles.inputOuterContainer}>
      {/* PASSWORD INPUT*/}
      <Text style={inputLabelStyle}>{label ? label : "Password"}</Text>
      <View style={defaultContainerStyle}>
        <TextInput style={defaultInputStyle} {...textInputConfig} cursorColor="#000000" secureTextEntry={!displayPassword}/>
        {eyeIcon}
        {/* <Ionicons name="ios-eye-outline" size={24} color="grey" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputOuterContainer: {
    width: "100%",
    marginTop: 20,
  },
  inputContainer: {
    borderColor: "#E0E0E0",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  inputLabel: {
    opacity: 0.7,
    color: "#828282",
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  inputError: {
    fontSize: 14,
    borderColor: "#d49b9b",
  },
  labelError: {
    color: "#a31717",
  },
});
export default PasswordInput;
