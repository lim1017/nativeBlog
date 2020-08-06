import React, { useReducer } from "react";
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_random_blog":
      return ([...state, { title: `Blog Post #${state.length + 1}`, id: Math.floor(Math.random()*999999) }]);
    case "delete_blog":
      return state.filter((blog)=> blog.id !== action.payload)
    case "add_real_blog":
      return ([...state, { title: action.payload.title, content:action.payload.content, id: Math.floor(Math.random()*999999) }])
    case "edit_blog":
      return state.map((blog)=>blog.id === action.payload.id ? {...action.payload.blog, id:blog.id} : blog)
    default:
      return state;
  }
};

const addRandomBlog = (dispatch)=>{
  return () =>{
    dispatch({type:'add_random_blog'})
  }
}

const deleteBlog = (dispatch)=>{
  return (id) =>{
    dispatch({type:'delete_blog', payload: id})
  }
}

const editBlog = (dispatch)=>{
  return (blog, id, callback) =>{

    dispatch({type:'edit_blog', payload: {id, blog}})
    callback()
  }
}

const addRealBlog = (dispatch)=>{
  return (blog, callback) =>{
    dispatch({type:'add_real_blog', payload:blog})
    callback()
  }
}



export const { Context, Provider} = createDataContext(blogReducer, { addRealBlog, deleteBlog, addRandomBlog, editBlog }, []);
