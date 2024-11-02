import { Dimensions, StyleSheet } from "react-native";
import { thems } from "../../global/themes";

export const style = StyleSheet.create({
    containerTop:{
        width:'100%',
        height:100,
        textAlign:'center',
        padding: 20,
        color:'white',
        backgroundColor: thems.colors.lightGray,
    },

    boxTop:{
        height:100,
        width:'100%',
        alignItems: 'center',

    },

    boxMid:{
        height:100,
        width: '100%',
        paddingHorizontal: 37,
    },

    boxBottom:{
        height:100,
        width: '100%',
    },

    boxTopR:{
        height:Dimensions.get('window').height/4,
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

    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor: thems.colors.orange,
        marginTop: 8,
        marginBottom: 15,
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
    },

    containerProducts:{
        width:'100%',
        height: '100%',
        flexDirection:'column'        //backgroundColor:'green'
    },

    productCard:{
        width:150,
        height: 150,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        padding: 30
    },

    productImage:{
        width:90,
        height: 90,

    },

    productText:{
        fontWeight: 'bold'
    },

    boxList:{
        width: '100%',
        
    },
    card:{
        width:'100%',
        height: 90,
        marginTop: 6,
        borderWidth:2,
        borderRadius:15,
        justifyContent:'center',
        padding:10,
        marginBottom: 15,

      },

    rowCard:{
        flexDirection:'row',
        alignContent:'center',
    },

    textCard:{
        marginTop:19,
        marginLeft:15,
        alignContent:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:18
    }


})