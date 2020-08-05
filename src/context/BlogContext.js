import React, { useReducer } from "react";
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "add_blog":
      return ([...state, { title: `Blog Post #${state.length + 1}` }]);
    default:
      return state;
  }
};

const addBlog = (dispatch)=>{
  return () =>{
    dispatch({type:'add_blog'})
  }
}

export const { Context, Provider} = createDataContext(blogReducer, { addBlog }, []);
