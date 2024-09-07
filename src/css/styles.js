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
    textContainer : {
        padding : 15,
        backgroundColor : '#D20062',
        color : 'white',
        borderRadius : 50,
        margin : 30,
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
        backgroundColor: 'white',
        padding: 20,
    },
    modalImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    modalText : {
        fontSize : 20,
        color : 'white',
    },
    modalTextContainer : {
        backgroundColor : '#D20062',
        borderRadius : 50,
        padding : 15,
        overflow : 'hidden',
    },
    likedButton : {
        backgroundColor : '#77E4C8',
        height : 45,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center',
    },
});