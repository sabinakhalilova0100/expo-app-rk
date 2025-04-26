// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { FavoritesProvider } from './context/FavoritesContext'; // Импортируем провайдер

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <FavoritesProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//           <Stack.Screen name="Favorites" component={FavoritesScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </FavoritesProvider>
//   );
// }

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FavoritesProvider } from './context/FavoritesContext';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Стек для Home + Details
// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//       <Stack.Screen name="Favorites" component={FavoritesScreen} />
//     </Stack.Navigator>
//   );
// }



// export default function App() {
//   return (
//     <FavoritesProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen 
//             name="Home" 
//             component={HomeStack}
//             options={{ headerShown: false }} // <-- скрыть шапку для HomeStack
//           />
//           <Tab.Screen 
//             name="Favorites" 
//             component={FavoritesScreen}
//             options={{ headerShown: false }} // <-- скрыть шапку для Favorites
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </FavoritesProvider>
//   );
// }
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Добавляем!
// import { FavoritesProvider } from './context/FavoritesContext';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// function FavoritesStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Favorites" component={FavoritesScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <FavoritesProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeStack} />
        
//           <Tab.Screen name="Favorites" component={FavoritesStack} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </FavoritesProvider>
//   );
// }


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FavoritesProvider } from './context/FavoritesContext';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// function FavoritesStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Favorites" component={FavoritesScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <FavoritesProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen 
//             name="Home" 
//             component={HomeStack} 
//             options={{ headerShown: false }} // <-- вот здесь
//           />
//           <Tab.Screen 
//             name="Favorites" 
//             component={FavoritesStack} 
//             options={{ headerShown: false }} // <-- и здесь
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </FavoritesProvider>
//   );
// }
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Добавляем!
import Ionicons from 'react-native-vector-icons/Ionicons'; // <-- импорт иконок
import { FavoritesProvider } from './context/FavoritesContext';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';  // Иконка для вкладки Home
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline'; // Иконка для вкладки Favorites
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',  // Цвет активной вкладки
            tabBarInactiveTintColor: 'gray',   // Цвет неактивной вкладки
            headerShown: false,  // Убираем заголовок на табах
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Favorites" component={FavoritesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
