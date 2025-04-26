// // context/FavoritesContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   const loadFavorites = async () => {
//     try {
//       const storedFavorites = await AsyncStorage.getItem('favorites');
//       if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addFavorite = async (article) => {
//     const updatedFavorites = [...favorites, article];
//     setFavorites(updatedFavorites);
//     await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   const removeFavorite = async (url) => {
//     const updatedFavorites = favorites.filter(item => item.url !== url);
//     setFavorites(updatedFavorites);
//     await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };
// context/FavoritesContext.js











// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Создаём контекст для избранного
// const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   // Загружаем избранные статьи из AsyncStorage при старте приложения
//   useEffect(() => {
//     const loadFavorites = async () => {
//       try {
//         const savedFavorites = await AsyncStorage.getItem('favorites');
//         if (savedFavorites) {
//           setFavorites(JSON.parse(savedFavorites));
//         }
//       } catch (error) {
//         console.error('Failed to load favorites', error);
//       }
//     };

//     loadFavorites();
//   }, []);

//   // Сохраняем избранные статьи в AsyncStorage
//   const saveFavorites = async (newFavorites) => {
//     try {
//       await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
//       setFavorites(newFavorites);
//     } catch (error) {
//       console.error('Failed to save favorites', error);
//     }
//   };

//   // Добавление/удаление статьи из избранного
//   const toggleFavorite = (article) => {
//     let newFavorites = [...favorites];
//     const index = newFavorites.findIndex((item) => item.id === article.id);

//     if (index === -1) {
//       newFavorites.push(article); // Добавляем статью
//     } else {
//       newFavorites.splice(index, 1); // Удаляем статью
//     }

//     saveFavorites(newFavorites);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesContext;
// context/FavoritesContext.js


// import React, { createContext, useState } from 'react';

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (article) => {
//     setFavorites((prevFavorites) => [...prevFavorites, article]);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };



// import React, { createContext, useState } from 'react';

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (article) => {
//     setFavorites((prevFavorites) => [...prevFavorites, article]);
//   };

//   const removeFromFavorites = (article) => {
//     setFavorites((prevFavorites) => prevFavorites.filter(item => item.id !== article.id));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Импорт AsyncStorage

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Загрузка избранных при старте приложения
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

  // Сохраняем избранные в AsyncStorage каждый раз при их изменении
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
