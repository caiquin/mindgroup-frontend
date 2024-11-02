import { Dimensions, StyleSheet } from "react-native";
import { thems } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        backgroundColor: thems.colors.bgScreen
    },

    boxTop:{
        height:50,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 50
    },

    boxMid:{
        height:200,
        width: '100%',
        paddingHorizontal: 37,
        marginTop:50

    },

    boxBottom:{
        height:300,
        width: '100%',
        alignItems:'center',
        marginTop:250
    },

    boxTopR:{
        height:Dimensions.get('window').height/6,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 50
    },

    boxMidR:{
        height:Dimensions.get('window').height/2.5,
        width: '100%',
        paddingHorizontal: 37,

    },

    boxBottomR:{
        height:Dimensions.get('window').height/4,
        width: '100%',
        alignItems:'center',
    },

    logo:{
        width:90,
        height:90
    },

    title:{
        fontWeight:'bold',
        marginTop:30,
        fontSize: 23
    },


})