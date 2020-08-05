import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Context } from "../context/BlogContext";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default BlogScreen;
