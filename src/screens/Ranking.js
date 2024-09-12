import React, { useState, useEffect} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import imagesDataList from '../miscellaneous/imagesData';
import  { styles } from '../css/styles';

const imagesData = imagesDataList;

function Ranking() {

	const [sortedImageData, setSortedImageData] = useState([]);

    useEffect(() => {
        const sortedData = imagesData.sort((a, b) => b.likes - a.likes);
        setSortedImageData(sortedData);
    }, []);

    return (
		<ScrollView style={{ flex : 1}}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop : 25}}>
                <Text style={styles.header}>Ranking Page</Text>
            </View>
            <View>
                {sortedImageData.map((item, index) => (
                    <View key={item.id}>
                        <View style={{ marginVertical: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            <Image source={item.imagePath} style={{ width: 200, height: 200 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{item.user}</Text>
                                <Text>Likes: {item.likes}</Text>
                            </View>
                        </View>
                        {index < sortedImageData.length - 1 && (
                            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
	);
}

export default Ranking;