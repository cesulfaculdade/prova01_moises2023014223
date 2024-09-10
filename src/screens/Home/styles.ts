import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7A4A9E',
      alignItems: 'center',
      width:"100%",
      height:"100%",
      alignContent: "flex-start",
      flex: 1,
      padding: 24
    },
    titleList:{
        fontWeight: "700",
        color: "#F2F2F2",
        fontSize: 20,
        textAlign: "left",
        alignSelf: "flex-start"
    },
    emptyText:{
        margin: "auto"
    },
    containerHeader: {
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
    },
    emptyContainer:{
       width: "100%"
    },
    list:{
        width:"100%",
        height: 579,
        flexDirection: "column",
        alignContent: "center"
    }
  });