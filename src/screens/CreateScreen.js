import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {

  const context = useContext(Context);
  const { state } = context;

  const [ blogDetails, setBlogDetails ] = useState({title:'', content: ''})

  const handleChg = (field, newValue)=>{
    setBlogDetails({...blogDetails, [field]:newValue})
  }

  console.log(blogDetails)

  return (
    <View style={styles.container}>
      <Text>Create Screen</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput 
      style={styles.input}
      value={blogDetails.title}
      onChangeText={(newValue)=> handleChg('title', newValue)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput 
      style={styles.input}
      value={blogDetails.content}
      onChangeText={(newValue)=> handleChg('content', newValue)}
      />

      <Button title="Create Blog"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10,
  },
  input:{
    borderColor: "black",
    borderWidth:1,
    fontSize:18,
    marginBottom:15,

  },
  label:{
    fontSize:20,
    marginBottom:10
  }
});
export default CreateScreen;
