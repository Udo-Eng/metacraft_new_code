import {Dimensions} from "react-native";

const {width,height}  = Dimensions.get("window");

export const COLORS = {
    primaryColor : "#420D8B",
    backgroundColor : "#ffffff",
    titleColor : "#221b38",
    dotColor: "grey",
    selectionText:"#221B38",
}


export const SIZES  = {
    base : 16,
    width,
    height
}


const theme = {COLORS,SIZES};

export default  theme;