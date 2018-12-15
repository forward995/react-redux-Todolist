import React from "react";
import Footer from "./Footer";
import AddTodo from "../Container/AddTodo";
import VisibleTodoList from "../Container/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
