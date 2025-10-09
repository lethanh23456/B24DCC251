import React, { useState } from "react";
import "./App.css";
import ToDoList from "./component/ToDoList/ToDoList";
import ColorPicker from "./component/ColorPicker/ColorPicker";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import RenderPost from "./component/RenderPost/RenderPost";
import Quiz from "./component/Quiz/Quiz";
import { useTheme } from "./useTheme";

function App() {
  const { theme, toggleTheme } = useTheme("light");

  return (
    <div className="App">
      <ToDoList />
      <ColorPicker />
      <ShoppingCart />
      <RenderPost />
      <Quiz />
      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          display: "flex",
        }}
      >
        <h2>Chế độ hiện tại: {theme === "light" ? "Sáng" : "Tối"}</h2>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
          }}
        >
          Chuyển chủ đề
        </button>
      </div>
    </div>
  );
}

export default App;
