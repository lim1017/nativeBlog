import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Context } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen =()=>{

  const context = useContext(Context)

  const {state, addBlog} = context

  return(
    <View>
      <Text>Index Screen</Text>
      <FlatList 
        data={state}
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
