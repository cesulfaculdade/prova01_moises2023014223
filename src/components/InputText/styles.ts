import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width:345,
        height:51,
        marginVertical: 54,
        marginHorizontal: 24,
        borderColor: "#808080",
        borderRadius: 5,
        borderWidth: 1,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    input:{
        color: "#808080",
        padding: 16,
        backgroundColor:"#F2F2F2",
        width:"100%",
        height: 51,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    buttonInput:{
        width: 51,
        height: 51,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        backgroundColor: "#31C667",
    },
    buttonIcon:{
        margin:"auto"
    }
  });