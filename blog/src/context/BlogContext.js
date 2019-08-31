// import React, { useReducer } from 'react';

import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost': 
      return [
        ...state,
        { title: `Blog Post #${state.length + 1}` },
      ];

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
const addBlogPost = () => {
  dispatch({ type: 'add_blogpost'});
};

export const { Context, Provider } = createDataContext(blogReducer, addBlogPost, []);