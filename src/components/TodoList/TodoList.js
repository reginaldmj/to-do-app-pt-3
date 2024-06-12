import React from "react";
import TodoItem from "../TodoItem/TodoItem.js";


function TodoList ({todos,toggleItem,subtractItem}) {
    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
            key={todo.title}
            toggleItem = {toggleItem}
            subtractItem ={subtractItem}
            todo={todo} />
          ))}
        </ul>
      </section>
    );
}

export default TodoList;