import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './component/ToDoList/ToDoList';
import ColorPicker from './component/ColorPicker/ColorPicker';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import RenderPost from './component/RenderPost/RenderPost';
import Quiz from './component/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ColorPicker/>
      <ShoppingCart/>
      <RenderPost/>
      <Quiz/>
    </div>
  );
}

export default App;
