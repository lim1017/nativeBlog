import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import BlogContext from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen =()=>{

  const context = useContext(BlogContext)

  const {data, addBlog} = context

  return(
    <View>
      <Text>Index Screen</Text>
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item})=> <Text>{item.title}</Text>}
      />
      <Button 
        title="Add Blog"
        onPress={addBlog}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
 
});
export default IndexScreen;
