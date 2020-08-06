import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons'; 

const BlogScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const context = useContext(Context);
  const { state } = context;

  const activeBlog = state.filter((blog) => {
    return blog.id === id;
  });

  return (
    <View>
      <Text>Blog Screen</Text>
      <Text>{activeBlog[0].title}</Text>
      <Text>{activeBlog[0].content}</Text>
    </View>
  );
};

BlogScreen.navigationOptions =(props)=>{
  const id = props.navigation.getParam("id");

  return {
    headerRight: (
      <TouchableOpacity onPress={() => props.navigation.navigate("Edit", { id })}>
        <FontAwesome style={styles.headerIcon} name="edit" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight:20,
  },
});


export default BlogScreen;
