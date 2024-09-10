import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    card:{
        backgroundColor:"#F2F2F2",
        height: 44,
        width:301,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        textAlignVertical: "center",
        padding: 12
    },
    cardButton:{
        backgroundColor:"#E23C44",
        width: 44,
        height: 44,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    }

})