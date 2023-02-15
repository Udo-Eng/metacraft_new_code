import {View,Text,Image,SafeAreaView,StyleSheet} from "react-native";


const Success  = (props) => {

    return (
        <SafeAreaView style={styles.screen}>
            <Text styles={styles.title}>{props.title}</Text>
            <Image source={require("../../assets/feedback/success.png")} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center", 
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    title:{
        marginBottom: 100,
        fontSize: 19,

    }
})
export default Success;