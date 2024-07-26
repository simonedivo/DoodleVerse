import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import promptList from '../../resources/prompts';
import _ from 'lodash';
import { styles } from '../css/styles';

function Home() {
	const [dailyRandomPrompt, setDailyRandomPrompt] = useState(_.sample(promptList));
	const [newRandomPrompt, setNewRandomPrompt] = useState(_.sample(promptList));

	useEffect(() => {
		checkDailyPrompt();
	}, []);

	async function checkDailyPrompt() {
		try {
			const lastPromptTime = await AsyncStorage.getItem('lastPromptTime');
			const currentTime = new Date();

			if (lastPromptTime) {
				const lastPromptDate = new Date(lastPromptTime);
				if (currentTime.getDate() !== lastPromptDate.getDate()) {
					generateNewDailyPrompt();
				} else {
					const storedPrompt = await AsyncStorage.getItem('dailyRandomPrompt');
					if (storedPrompt) {
						setDailyRandomPrompt(storedPrompt);
					}
				}
			} else {
				generateNewDailyPrompt();
			}
		} catch (error) {
			console.error('Failed to check daily prompt:', error);
		}
	}

	async function generateNewDailyPrompt() {
		const newPrompt = _.sample(promptList);
		setDailyRandomPrompt(newPrompt);
		const currentTime = new Date();
		await AsyncStorage.setItem('lastPromptTime', currentTime.toISOString());
		await AsyncStorage.setItem('dailyRandomPrompt', newPrompt);
	}

	function handleNewPrompt() {
		setNewRandomPrompt(_.sample(promptList));
	}

	return (
		<ImageBackground source={require('../../resources/purpleBackground.jpg')} style={styles.homeContainer}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.header}>Home Page</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom : 60 }}>
                <Text style={styles.text}>Today's daily prompt is </Text>
                <Text style={styles.dailyPrompt}>{dailyRandomPrompt}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
				<Text style={styles.text}>Don't like it? Generate a new prompt</Text>
                <Pressable style={styles.button} onPress={handleNewPrompt}>
					<Text style={styles.buttonText}>GENERATE NEW PROMPT</Text>
				</Pressable>
				<View style={{ paddingBottom : 30 }}>
				<Text style={styles.text}>{newRandomPrompt}</Text>
				</View>
            </View>
        </ImageBackground>
	);
}

export default Home;