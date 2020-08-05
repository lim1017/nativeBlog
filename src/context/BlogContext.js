import React, { useReducer } from "react";
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "add_blog":
      return ([...state, { title: `Blog Post #${state.length + 1}`, id: Math.floor(Math.random()*999999) }]);
    case "delete_blog":
      return state.filter((blog)=> blog.id !== action.payload)
    default:
      return state;
  }
};

const addBlog = (dispatch)=>{
  return () =>{
    dispatch({type:'add_blog'})
  }
}

const deleteBlog = (dispatch)=>{
  return (id) =>{
    dispatch({type:'delete_blog', payload: id})
  }
}



export const { Context, Provider} = createDataContext(blogReducer, { addBlog, deleteBlog }, []);
