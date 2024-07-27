import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Button, TouchableOpacity, Modal} from 'react-native';
import { user } from './Login';
import imagesDataList from '../miscellaneous/imagesData';
import { styles } from '../css/styles';

const imagesData = imagesDataList;


function Social() {

	const [sortedImageData, setSortedImageData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [likedItems, setLikedItems] = useState({});

    useEffect(() => {
        const sortedData = imagesData.sort((a, b) => b.dateTime.localeCompare(a.dateTime));
        setSortedImageData(sortedData);
    }, []);

	function handleLike(id) {
        setSortedImageData((currentData) => {
            return currentData.map((item) => {
                if (item.id === id) {
                    const isLiked = likedItems[id];
                    const updatedLikes = isLiked ? item.likes - 1 : item.likes + 1;
                    return { ...item, likes: updatedLikes };
                }
                return item;
            });
        });
    
        setLikedItems((currentLikedItems) => ({
            ...currentLikedItems,
            [id]: !currentLikedItems[id],
        }));
    }

    function handleImagePress(item) {
        setSelectedImage(item);
        setModalVisible(true);
    }

    function renderItem({ item }) {
        return (
            <TouchableOpacity onPress={() => handleImagePress(item)} style={styles.imageContainer}>
                <Image source={item.imagePath} style={styles.imageSocial} />
            </TouchableOpacity>
        );
    }

	return (
        <View style={{ flex: 1 }}>
            <Text style={[styles.header, {paddingTop : 30, textAlign : 'center'}]}>Social Page</Text>
            <FlatList
                data={sortedImageData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatList}
            />
            {selectedImage && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalView}>
                        <Image source={selectedImage.imagePath} style={styles.modalImage} />
                        <View style={styles.modalTextContainer}>
                            <Text style={styles.modalText}>Made by {selectedImage.user}</Text>
                            <Text style={styles.modalText}>Date & Time: {selectedImage.dateTime}</Text>
                            <Text style={styles.modalText}>Description: {selectedImage.description}</Text>
                        </View>
                        <TouchableOpacity
                        onPress={() => handleLike(selectedImage.id)}
                        style={[
                            [styles.button, { margin : 30, backgroundColor : 'red' , width : 100, height : 50}],
                            likedItems[selectedImage.id] && [styles.likedButton, { margin : 30, width : 100, height : 50}],
                        ]}
                        >
                            <Text style={styles.buttonText}>Like</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.button, {backgroundColor : '#D20062', width : 100, height : 50}]}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
  }

export default Social;