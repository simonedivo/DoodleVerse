import React, { useState, useEffect} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import imagesDataList from '../miscellaneous/imagesData';

const imagesData = imagesDataList;

function Ranking() {

	const [sortedImageData, setSortedImageData] = useState([]);

    useEffect(() => {
        const sortedData = imagesData.sort((a, b) => b.likes - a.likes);
        setSortedImageData(sortedData);
    }, []);

    return (
		<ScrollView>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Social Page</Text>
                {sortedImageData.map((item) => (
                    <View key={item.id} style={{ marginVertical: 10, alignItems: 'center' }}>
                        <Image source={item.imagePath} style={{ width: 200, height: 200 }} />
                        <Text>{item.user}</Text>
						<Text>Likes: {item.likes}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
	);
}

export default Ranking;