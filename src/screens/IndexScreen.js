import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { Foundation } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

const IndexScreen = (props) => {
  const context = useContext(Context);
  const { state, addRandomBlog, deleteBlog } = context;


  const renderListItem = (item) => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Blog", { id: item.id })}
        >
          <Text style={styles.text}>
            {item.title} - id: {item.id}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteBlog(item.id)}>
          <Foundation name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Random Blog" onPress={addRandomBlog} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => renderListItem(item)}
      />
    </View>
  );
};


IndexScreen.navigationOptions =(props)=>{
  return {
    headerRight: (
      <TouchableOpacity onPress={() => props.navigation.navigate("Create")}>
        <Ionicons style={styles.headerIcon} name="ios-add-circle" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
  },
  headerIcon:{
    marginRight:30
  }
});
export default IndexScreen;
