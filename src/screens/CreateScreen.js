import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { Context } from "../context/BlogContext";
import DoubleForm from "../component/DoubleForm";

const CreateScreen = ({ navigation }) => {
  const context = useContext(Context);
  const { state, addRealBlog } = context;

  return (
    <View style={styles.container}>
      <Text>Create Screen</Text>
      <DoubleForm
        onSubmit={(blog)=>{
          addRealBlog(blog, ()=>navigation.navigate('Index'))
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
});
export default CreateScreen;
