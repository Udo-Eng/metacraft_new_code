import { View, Text, Image, StyleSheet } from "react-native"
import PrimaryButton from "../ui/PrimaryButton"

const ProcessedPage = ({title, note, image}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} />
        <Text style={styles.note}>{note}</Text>
        <PrimaryButton>Back to home</PrimaryButton>
    </View>
  )
}

export default ProcessedPage

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: '15%',
        backgroundColor: '#fff',
        height: '100%'
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 97,
        marginTop: 72
    },
    note: {
        fontWeight: '500',
        fontSize: 14,
        marginTop: 71,
        textAlign: 'center'
    }
})