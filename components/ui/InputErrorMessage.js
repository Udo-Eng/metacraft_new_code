import { View, Text ,StyleSheet} from 'react-native';

const InputErrorMessage = ({message}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.error}>{message}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
   error:{
    color: "#d49b9b",
    fontSize: 10,
   },
   messageContainer:{
        margin: 2,
        width: "100%",
        height: 30,
        alignItems:"flex-start",
        justifyContent:"center",
   }
});


export default InputErrorMessage;