import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
      <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>  
    );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
      headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')}) }>
              <FontAwesome name="pencil" size={30} color="black" />
          </TouchableOpacity>
      )
  };
}

const styles = StyleSheet.create({
    
});

export default ShowScreen;
