import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
// import Home from "./Home";
import Practice from './components/practice1'
// import Header from "./components/header";
// import Footer from "./components/Footer";
// import Foods from "./components/Foods";

import Excercise from './components/Excercise'

import Number from './excercises/Number';
import Header from "./components/youtube/Header";
import  Content  from "./components/youtube/Content";
import Footer from './components/youtube/Footer'
import Home from './components/firebase/Home'
import TodoApp from "./excercises/Todoapp/Todo";
import '../src/css/Todo.css'





const App = () => {
  // let user='karthik';
  return (
    <>
    {/* // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/home" element={<Home />} />
    // </Routes>
    // <Practice/> */}
    {/* <Header  name={'john'} user={user}/>
   
    <Footer user='karthik'/> */}

    {/* <Foods/> */}
    {/* <Excercise/> */}
    {/* <Number/> */}
    {/* <Header/>
    <Content/>
    <Footer/> */}
    {/* <Home/> */}
    <TodoApp/>
    </>
  );
};

export default App;
