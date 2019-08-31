// import React, { useReducer } from 'react';

import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost': 
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random()*9999),
        },
      ];

    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id? action.payload : blogPost;
      });

    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};


// //children - children is the thing wrapped inside custom component
// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: 'add_blogpost'});
//   };

//   // when creating BlogContext object via createContext, we also get inside that object something called 'Provider'
//   // This Provider will accept some information, and whatever information that we provided is going to be available to all of child components
//   return <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
//     {children}
//   </BlogContext.Provider>
// };

// export default BlogContext;

// ---- automating Context ------
const addBlogPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({ type: 'add_blogpost', payload: {title, content} });
    callBack();
  }
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: 'edit_blogpost', payload: {id, title, content} });
    callBack();
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, []);