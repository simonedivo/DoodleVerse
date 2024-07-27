import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView} from 'react-native';
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
		<ScrollView style={{flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop : 25}}>
                <Text style={styles.header}>Home Page</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{color : 'white', marginBottom : 10, fontSize : 24, textAlign : 'center'}}>Today's daily prompt is </Text>
                <Text style={{ fontWeight : 'bold', textTransform : 'uppercase', fontSize : 40, color : 'white', textAlign : 'center'}}>{dailyRandomPrompt}</Text>
            </View>
            <View style={styles.textContainer}>
				<Text style={{color : 'white', marginBottom : 10, fontSize : 20}}>Don't like it? Generate a new prompt</Text>
                <Pressable style={[styles.button, {backgroundColor : '#77E4C8'}]} onPress={handleNewPrompt}>
					<Text style={[styles.buttonText, {backgroundColor : '#77E4C8'}]}>GENERATE NEW PROMPT</Text>
				</Pressable>
				<View style={{ paddingBottom : 30 }}>
				<Text style={{ fontWeight : 'bold', textTransform : 'uppercase', fontSize : 36, color : 'white', textAlign : 'center', marginTop : 15}}>{newRandomPrompt}</Text>
				</View>
            </View>
		</ScrollView>
	);
}

export default Home;