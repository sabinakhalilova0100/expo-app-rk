import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import { fetchNews } from '../api/newsApi';
import { FavoritesContext } from '../context/FavoritesContext'; 

export default function HomeScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { addToFavorites, removeFromFavorites, favorites } = useContext(FavoritesContext); 

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, [fadeAnim]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (err) {
        console.error('Error loading news:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>
          Loading news...
        </Animated.Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error loading news.</Text>
      </View>
    );
  }


  const isFavorite = (article) => favorites.some(fav => fav.id === article.id);

  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.id?.toString() || item.url}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { article: item })}
          style={styles.itemContainer}
        >
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item)} 
            >
              <Ionicons
                name={isFavorite(item) ? 'heart' : 'heart-outline'}
                size={30}
                color={isFavorite(item) ? 'red' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 18,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    flex: 1, 
  },
});
