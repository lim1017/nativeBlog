import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([])

  const addBlog = () =>{
    setBlogs([...blogs, {title: `Blog Post #${blogs.length+1}`}])
  }

  const store ={
    data: blogs,
    addBlog
  }

  return <BlogContext.Provider value={store}>{children}</BlogContext.Provider>;
};
 

export default BlogContext;