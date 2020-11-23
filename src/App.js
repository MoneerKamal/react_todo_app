import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  //run once when we start
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, todoFilter]);
  const filterHandler = () => {
    switch (todoFilter) {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setfilteredTodos([...todos]);
        break;
    }
  };
  // save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        todoText={todoText}
        setTodoText={setTodoText}
        setTodoFilter={setTodoFilter}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
