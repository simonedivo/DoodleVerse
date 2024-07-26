import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width / 2 - 20;

export const styles = StyleSheet.create({
    loginContainer : {
        alignItems : 'center',
        paddingTop : 50,
    },
    image : {
        width : 160,
        height : 170,
    },
    titleLogin : {
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
    icon : {
        width: 20,
        height: 20,
        tintColor : 'purple',
    },
    homeContainer : {
        flex : 1,
        alignItems : 'center',
        paddingTop : 30,
        justifyContent : 'space-between',
    },
    header : {
        justifyContent : 'flex-start',
        alignItems : 'center',
        fontSize : 40,
        fontWeight : 'bold',
        color : 'black',
        borderRadius : 15,
    },
    text : {
        padding : 15,
        fontSize : 30,
        backgroundColor : '#F1EAFF',
        borderRadius : 50,
    },
    dailyPrompt : {
        padding : 15,
        fontSize : 30,
        backgroundColor : '#F1EAFF',
        borderRadius : 50,
        textTransform : 'uppercase',
        fontWeight : 'bold',
    },
    newPromptContainer : {
        fontSize : 30,
        justifyContent : 'flex-end',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : 'purple',
    },
    flatList: {
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    imageSocial: {
        width: imageSize,
        height: imageSize,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5D4FF',
        padding: 20,
    },
    modalImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    modalText : {
        fontSize : 20,
    },
    modalTextContainer : {
        backgroundColor : '#F1EAFF',
        borderRadius : 50,
        padding : 15,
        overflow : 'hidden',
    },
    likedButton : {
        backgroundColor : 'red',
        height : 45,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
});