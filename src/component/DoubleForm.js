import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const DoubleForm = (props) => {
  const { initalValues, onSubmit, navigation } = props;

  const [blogDetails, setBlogDetails] = useState({
    title: initalValues.title,
    content: initalValues.content,
  });

  const handleChg = (field, newValue) => {
    setBlogDetails({ ...blogDetails, [field]: newValue });
  };

  const createBlog = () => {
    onSubmit(blogDetails);
  };

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={blogDetails.title}
        onChangeText={(newValue) => handleChg("title", newValue)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        value={blogDetails.content}
        onChangeText={(newValue) => handleChg("content", newValue)}
      />

      <Button title="Save Blog" onPress={createBlog} />
    </View>
  );
};

DoubleForm.defaultProps = {
  initalValues: {
    title: "",
    content: "",
  },
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

export default DoubleForm;
