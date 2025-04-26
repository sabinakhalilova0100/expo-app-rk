// screens/FavoritesScreen.js
// import React, { useContext } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import FavoritesContext from '../context/FavoritesContext';

// export default function FavoritesScreen({ navigation }) {
//   const { favorites } = useContext(FavoritesContext); // Доступ к избранным через контекст

//   if (favorites.length === 0) {
//     return (
//       <View style={styles.center}>
//         <Text>No favorites yet.</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={favorites}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <TouchableOpacity onPress={() => navigation.navigate('Details', { article: item })}>
//           <View style={styles.item}>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   title: {
//     fontSize: 18,
//   },
// });



// screens/FavoritesScreen.js
// import React, { useContext } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { FavoritesContext } from '../context/FavoritesContext';

// export default function FavoritesScreen() {
//   const { favorites } = useContext(FavoritesContext);

//   if (favorites.length === 0) {
//     return (
//       <View style={styles.center}>
//         <Text>No favorites yet.</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={favorites}
//       keyExtractor={(item) => item.url || item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text style={styles.title}>{item.title}</Text>
//         </View>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   title: {
//     fontSize: 18,
//   },
// });


// import React, { useContext } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { FavoritesContext } from '../context/FavoritesContext';

// export default function FavoritesScreen({ navigation }) {
//   const { favorites } = useContext(FavoritesContext);

//   if (favorites.length === 0) {
//     return (
//       <View style={styles.center}>
//         <Text>No favorites yet.</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={favorites}
//       keyExtractor={(item) => item.url || item.id.toString()}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           style={styles.item}
//           onPress={() => navigation.navigate('Details', { article: item })}
//         >
//           <Text style={styles.title}>{item.title}</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   title: {
//     fontSize: 18,
//   },
// });

// import React, { useContext } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { FavoritesContext } from '../context/FavoritesContext';
// import Ionicons from 'react-native-vector-icons/Ionicons';  // Для иконки сердца

// export default function FavoritesScreen({ navigation }) {
//   const { favorites } = useContext(FavoritesContext);

//   if (favorites.length === 0) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.noFavoritesText}>No favorites yet.</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={favorites}
//       keyExtractor={(item) => item.url || item.id.toString()}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           style={styles.item}
//           onPress={() => navigation.navigate('Details', { article: item })}
//         >
//           <View style={styles.itemContent}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Ionicons name="heart" size={20} color="red" /> {/* Сердечко для избранного */}
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',  // Легкий фон для центра
//   },
//   noFavoritesText: {
//     fontSize: 18,
//     color: '#6200ee',  // Фиолетовый цвет для текста
//     fontWeight: 'bold',
//   },
//   item: {
//     padding: 15,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3,  // Тень для Android
//     shadowColor: '#000',  // Тень для iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   itemContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',  // Выровнять элементы по центру
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',  // Для выделения заголовка
//     flex: 1,  // Чтобы текст не выходил за пределы
//   },
// });
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Для иконки сердца и крестика

export default function FavoritesScreen({ navigation }) {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext); // Достаем функцию для удаления

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
    backgroundColor: '#f5f5f5',  // Легкий фон для центра
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#6200ee',  // Фиолетовый цвет для текста
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,  // Тень для Android
    shadowColor: '#000',  // Тень для iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  // Выровнять элементы по центру
  },
  title: {
    fontSize: 18,
    fontWeight: '600',  // Для выделения заголовка
    flex: 1,  // Чтобы текст не выходил за пределы
  },
  icons: {
    flexDirection: 'row', // Иконки рядом
    alignItems: 'center', // По вертикали по центру
  },
  heartIcon: {
    marginRight: 10,  // Отступ между иконками
  }
});
