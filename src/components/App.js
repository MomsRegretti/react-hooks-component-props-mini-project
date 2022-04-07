import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <>
   <Header name ={blogData.name}/>
   <About src= {blogData.image} about={blogData.about}/>
   <ArticleList posts={blogData.posts}/>
   </>
  );
}

export default App;
