import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Context } from "../context/BlogContext";
import DoubleForm from "../component/DoubleForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, editBlog } = useContext(Context);
  const activeBlog = state.filter((blog) => {
    return blog.id === id;
  });

  return (
    <View>
      <Text style={styles.title}>Edit Screen</Text>
      <DoubleForm
        initalValues={{
          title: activeBlog[0].title,
          content: activeBlog[0].content,
        }}
        onSubmit={(blog) => {
          editBlog(blog, id, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default EditScreen;
