import React from "react";

const Form = ({ setTodoText, setTodos, todos, todoText, setTodoFilter }) => {
  const filterHandler = e => {
    setTodoFilter(e.target.value);
  };
  const todoTextHandler = e => {
    setTodoText(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: todoText,
        completed: false
      }
    ]);
    setTodoText("");
  };
  return (
    <form>
      <input
        value={todoText}
        onChange={todoTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div onChange={filterHandler} className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
