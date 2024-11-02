import { Dimensions, StyleSheet } from "react-native";
import { thems } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor: thems.colors.orange,
        marginTop: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    
        elevation: 7,
    },
    
    textButton:{
        fontSize:20,
        fontWeight:'bold',
    }
})