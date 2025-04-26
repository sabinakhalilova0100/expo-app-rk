
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import Ionicons from 'react-native-vector-icons/Ionicons';  

export default function FavoritesScreen({ navigation }) {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext); 

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.noFavoritesText}>No favorites yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url || item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Details', { article: item })}
        >
          <View style={styles.itemContent}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.icons}>
              <Ionicons 
                name="heart" 
                size={20} 
                color="red" 
                style={styles.heartIcon} 
              />
              <TouchableOpacity onPress={() => removeFromFavorites(item)}>
                <Ionicons 
                  name="close-circle" 
                  size={20} 
                  color="gray" 
                />
              </TouchableOpacity>
            </View>
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
    backgroundColor: '#f5f5f5',  
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#6200ee', 
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
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
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  
  },
  title: {
    fontSize: 18,
    fontWeight: '600',  
    flex: 1,  
  },
  icons: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  heartIcon: {
    marginRight: 10, 
  }
});
