import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    if (loading) {
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `${BASE_URL}/curated?per_page=20&page=${page}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        },
      );

      const newImages = response.data.photos.map(
        (photo: {src: {medium: string}}) => photo.src.medium,
      );

      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <Image source={{uri: item}} style={{width: 150, height: 150}} />
    </TouchableOpacity>
  );

  const handleImagePress = (image: string) => {
    console.log(image);
  };

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Pexels
      </Text>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={images}
        keyExtractor={item => item}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={fetchImages}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
