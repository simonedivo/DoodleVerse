import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { styles } from '../css/styles';

const logo = require('../../assets/logo.png');

function Login() {
    const [click, setClick] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            
            <Image source={logo} style={styles.image}/>
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputView}> 
                <TextInput style={styles.input} placeholder='Email or Username' value={username} 
                onChangeText={text => setUsername(text)} autoCorrent={false} autoCapitalize='none'/>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password}
                onChangeText={text => setPassword(text)} autoCorrect={false} autoCapitalize='none'/>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={() => Alert.alert('Login', 'Login Successful')}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default Login;