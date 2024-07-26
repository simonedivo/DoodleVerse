import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { user } from './Login';

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
        <View style={{ flex: 1 }}>
			<View style={{ flex:1 }}>
				<Text style={{ fontSize: 24, fontWeight: 'bold' }}>Username: {user.getUsername()}</Text>
            	<TextInput
            	    placeholder="Description"
            	    value={description}
            	    onChangeText={setDescription}
            	/>
            	<Button title="Launch Camera" onPress={handleLaunchCamera} />
            	<Button title="Launch Image Library" onPress={handleLaunchImageLibrary} />
            	{imagePath && (
            	    <>
            	        <Text>This is your drawing:</Text>
            	        <Image source={{ uri: imagePath }} style={{ width: 200, height: 200 }} />
						<Button title="Confirm" onPress={handleSaveImage} />
            	    </>
            	)}
				</View>
        </View>
    );
}

export default Upload;