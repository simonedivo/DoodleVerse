import React, { useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/styles';

class User {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
}

let user = new User('');

const logo = require('../../assets/logo.png');

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'test' && password === 'test') {
            Alert.alert('Success', 'You are logged in');
            user.setUsername(username);
            navigation.navigate('TabNavigator');
        } else {
            Alert.alert('Error', 'Invalid credentials');
        }
    }

    return (
        <SafeAreaView style={styles.loginContainer}>
            
            <Image source={logo} style={styles.image}/>
            <Text style={styles.titleLogin}>Login</Text>

            <View style={styles.inputView}> 
                <TextInput style={styles.input} placeholder='Email or Username' value={username} 
                onChangeText={text => setUsername(text)} autoCorrent={false} autoCapitalize='none'/>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password}
                onChangeText={text => setPassword(text)} autoCorrect={false} autoCapitalize='none'/>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export { user };

export default Login;