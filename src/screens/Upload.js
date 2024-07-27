import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, Pressable, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { user } from './Login';
import { styles } from '../css/styles';

function getDateString() {
	const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;
	return formattedDate;
}

function Upload() {
	const [description, setDescription] = useState('');
	const [imagePath, setImagePath] = useState('');

	const handleLaunchCamera = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status !== 'granted') {
			alert('Sorry, we need camera permissions to make this work!');
			return;
		}

		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImagePath(result.assets[0].uri);
		}
	};

	const handleLaunchImageLibrary = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			alert('Sorry, we need media library permissions to make this work!');
			return;
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImagePath(result.assets[0].uri);
		}
	};

	const handleSaveImage = async () => {
		if (!imagePath) {
			console.log('No image to save');
			return;
		}
	
		const fileName = imagePath.split('/').pop();
		const destinationPath = `./../images/${fileName}`;
		
		Alert.alert('Your drawing has been saved!');
	};

	return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop : 25}}>
                <Text style={styles.header}>Upload Page</Text>
            </View>
			<View style={styles.textContainer}>
				<Text style={{ fontSize: 24, fontWeight: 'bold', color : 'white', marginBottom : 20}}>Username: {user.getUsername()}</Text>
            	<TextInput
            	    placeholder="Insert a description here" 
            	    value={description}
            	    onChangeText={setDescription}
					style={{ color : 'white', fontSize : 18, marginBottom : 20}}	
            	/>
            	<Pressable onPress={handleLaunchCamera} style={[styles.button, {backgroundColor : '#77E4C8'}]}>
					<Text style={[styles.buttonText, {backgroundColor : '#77E4C8'}]}>Camera</Text>
				</Pressable>
				<Text style={{color : 'white', margin : 15, fontSize : 20, textAlign : 'center'}}>OR</Text>
            	<Pressable onPress={handleLaunchImageLibrary} style={[styles.button, {backgroundColor : '#77E4C8'}]}>
					<Text style={[styles.buttonText, {backgroundColor : '#77E4C8'}]}>Choose from Library</Text>
				</Pressable>
            	{imagePath && (
            	    <>
            	        <Image source={{ uri: imagePath }} style={{ width: 200, height: 200 , margin: 30, borderWidth: 2, borderColor: 'white', alignItems: 'center'}} />
						<Pressable title="Confirm" onPress={handleSaveImage} style={[styles.button, {backgroundColor : '#77E4C8'}]}>
					<Text style={[styles.buttonText, {backgroundColor : '#77E4C8'}]}>Upload</Text>
				</Pressable>
            	    </>
            	)}
				</View>
        </ScrollView>
    );
}

export default Upload;