import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogs":
      return action.payload;
    case "add_random_blog":
      return [
        ...state,
        {
          title: `Blog Post #${state.length + 1}`,
          id: Math.floor(Math.random() * 999999),
        },
      ];
    case "delete_blog":
      return state.filter((blog) => blog.id !== action.payload);
    case "add_real_blog":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 999999),
        },
      ];
    case "edit_blog":
      return state.map((blog) =>
        blog.id === action.payload.id
          ? { ...action.payload.blog, id: blog.id }
          : blog
      );
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogs", payload: response.data });
  };
};

const addRealBlog = (dispatch) => {
  return async (blog, callback) => {
    const response = await jsonServer.post("/blogposts", blog);

    // dispatch({ type: "add_real_blog", payload: blog });
    callback();
  };
};

const addRandomBlog = (dispatch) => {
  return async (state) => {
    await jsonServer.post("/blogposts", {
      title: `Blog Post #${state.length + 1}`,
      content: `I love blogs`,
      id: Math.floor(Math.random() * 999999),
    });
    // dispatch({ type: "add_random_blog" });
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blog", payload: id });
  };
};

const editBlog = (dispatch) => {
  return async (blog, id, callback) => {
    await jsonServer.put(`/blogposts/${id}`, blog);

    // dispatch({ type: "edit_blog", payload: { id, blog } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addRealBlog, deleteBlog, addRandomBlog, editBlog, getBlogPosts },
  []
);
