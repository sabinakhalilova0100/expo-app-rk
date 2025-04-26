// components/NewsItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsItem = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {article.image && <Image source={{ uri: article.image }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: '#666',
  },
});
