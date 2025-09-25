import React, { useState } from 'react';
import {decrement, increment, nhandoi, setUser, addTodo, deleteTodo} from "./StateManagement/Action";
import {StoreProvider, useStore} from "./StateManagement/Store/store";

function Counter() {
  const {state, dispatch} = useStore();

  return (
    <div>
      <p>Giá trị: {state.counter.count}</p>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(nhandoi())}>Nhân đôi</button>
    </div>
  );
}

function UserInfo() {
  const {state, dispatch} = useStore();

  return (
    <div>
      <p>User: {state.user.name}</p>
      <button onClick={() => dispatch(setUser("Alice"))}>
        Đổi tên thành Alice
      </button>
      <button onClick={() => dispatch(setUser("Bob"))}>
        Đổi tên thành Bob
      </button>
    </div>
  );
}




function Cv({ ten, onDelete }) {
  return (
    <li>
      <span>{ten}</span>{' '}
      <button onClick={onDelete}>Xóa</button>
    </li>
  );
}

function ToDoList() {
  const [task, setTask] = useState(''); 
  const {state, dispatch} = useStore(); 
  
  const handleAdd = () => {
    if (task.trim() === '') return;
    dispatch(addTodo(task)); 
    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    dispatch(deleteTodo(indexToDelete)); 
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 1: To-do List</h2>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {state.todo.tasks.map((item, index) => (
          <Cv key={index} ten={item} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
}


export default function App() {
  return (
    <StoreProvider>
      <Counter />
      <UserInfo />
      <ToDoList/>
    </StoreProvider>
  );
}
