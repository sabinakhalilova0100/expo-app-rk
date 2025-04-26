


import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favorites');
        if (jsonValue != null) {
          setFavorites(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Ошибка загрузки избранных:', e);
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        const jsonValue = JSON.stringify(favorites);
        await AsyncStorage.setItem('@favorites', jsonValue);
      } catch (e) {
        console.error('Ошибка сохранения избранных:', e);
      }
    };

    saveFavorites();
  }, [favorites]);

  const addToFavorites = (article) => {
    setFavorites((prevFavorites) => [...prevFavorites, article]);
  };

  const removeFromFavorites = (article) => {
    setFavorites((prevFavorites) => prevFavorites.filter(item => item.id !== article.id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
