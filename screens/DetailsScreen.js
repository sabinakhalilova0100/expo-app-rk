// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function DetailsScreen({ route }) {
//   const { article } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{article.title}</Text>
//       <Text style={styles.content}>{article.body}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 16,
//   },
// });
// screens/DetailsScreen.js







import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const { article } = route.params; // Получаем переданные данные

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.body}>{article.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
});


