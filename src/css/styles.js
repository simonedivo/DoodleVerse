import { StyleSheet } from 'react-native';
import { isNewBackTitleImplementation } from 'react-native-screens';

export const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        paddingTop : 7,
    },
    image : {
        width : 160,
        height : 170,
    },
    title : {
        fontSize : 30,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        textAlign : 'center',
        paddingVertical : 40,
        color : 'purple',
    },
    inputView : {   
        gap : 15,
        width : '100%',
        paddingHorizontal : 40,
        marginBottom : 5,
    },
    buttonView : {
        width : '100%',
        paddingHorizontal : 50,
    },
    button : {
        backgroundColor : 'purple',
        height : 45,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonText : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
    },
});