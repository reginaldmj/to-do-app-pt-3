// resources: Help from Gabby
import React, { useState } from "react";
import todosList from "./todos.json";
import { v4 as uuid } from "uuid";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import TodoList from "./components/TodoList/TodoList.js";
import { connect } from "react-redux";
import { addTodo } from "./actions/todosActions";

function App(props) {
  const [todos, setTodos] = useState(todosList);
  const [input, setInput] = useState("");

  function addItem(event) {
    if (event.key === "Enter" || "Return") {
   props.addTodo(input)
      setInput("");
    }
  }

  function toggleItem(id) {
    const newToDos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newToDos);
  }

  function subtractItem(id) {
    const newToDos = todos.filter((todo) => {
      const keptToDos = id !== todo.id;
      return keptToDos;
    });
    setTodos(newToDos);
  }
  function removeCompleted() {
    const newToDos = todos.filter((todo) => {
      const keptToDos = !todo.completed;
      return keptToDos;
    });
    setTodos(newToDos);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={addItem}
        />
      </header>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <TodoList
              todos={todos}
              toggleItem={toggleItem}
              subtractItem={subtractItem}
            />
          );
        }}
      />
      \
      <Route
        exact
        path="/active"
        render={() => {
          return (
            <TodoList
              todos={todos.filter((todo) => todo.completed === false)}
              toggleItem={toggleItem}
              subtractItem={subtractItem}
            />
          );
        }}
      />
      <Route
        exact
        path="/completed"
        render={() => {
          return (
            <TodoList
              todos={todos.filter((todo) => todo.completed === true)}
              toggleItem={toggleItem}
              subtractItem={subtractItem}
            />
          );
        }}
      />
      {/* <TodoList todos={todos}
        toggleItem = {toggleItem}
        subtractItem = {subtractItem}
        /> */}
      <footer className="footer">
        <span className="todo-count">
          <strong>
            {" "}
            {todos.filter((todo) => todo.completed === false).length}
          </strong>{" "}
          item(s) left
        </span>
        <button className="clear-completed" onClick={() => removeCompleted()}>
          Clear completed
        </button>

        <ul className="filters">
          <li>
            <NavLink to="/" activeClassName="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">
              Completed
            </NavLink>
          </li>
        </ul>
      </footer>
    </section>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (inputText) => dispatch(addTodo(inputText)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React, { useState } from "react";
// import { Switch, Route, NavLink } from "react-router-dom";
// import TodoList from "./components/TodoList/TodoList";
// import { connect } from "react-redux";
// import {
//   addTodo,
//   clearCompletedTodos,
// } from "./actions/actions";
// function App(props) {
//   const [inputText, setInputText] = useState("");
//   const handleAddTodo = (event) => {
//     if (event.which === 13) {
//       props.addTodo(inputText);
//       setInputText("");
//     }
//   };
//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1>todos</h1>
//         <input
//           onChange={(event) => setInputText(event.target.value)}
//           onKeyDown={(event) => handleAddTodo(event)}
//           className="new-todo"
//           value={inputText}
//           placeholder="What needs to be done?"
//           autoFocus
//         />
//       </header>
//       <Switch>
//         <Route exact path="/">
//           <TodoList todos={Object.values(props.todos)} />
//         </Route>
//         <Route exact path="/active">
//           <TodoList
//             todos={Object.values(props.todos).filter((todo) => !todo.completed)}
//           />
//         </Route>
//         <Route exact path="/completed">
//           <TodoList
//             todos={Object.values(props.todos).filter((todo) => todo.completed)}
//           />
//         </Route>
//       </Switch>
//       <footer className="footer">
//         {/* <!-- This should be `0 items left` by default --> */}
//         <span className="todo-count">
//           <strong>
//             {Object.values(props.todos).filter((todo) => !todo.completed).length}
//           </strong>{" "}
//           item(s) left
//         </span>
//         <ul className="filters">
//           <li>
//             <NavLink exact to="/" activeClassName="selected">
//               All
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/active" activeClassName="selected">
//               Active
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/completed" activeClassName="selected">
//               Completed
//             </NavLink>
//           </li>
//         </ul>
//         <button
//           className="clear-completed"
//           onClick={() => props.clearCompleted()}
//         >
//           Clear completed
//         </button>
//       </footer>
//     </section>
//   );
// }
// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });
// const mapDispatchtoProps = (dispatch) => ({
//   addTodo: (inputText) => dispatch(addTodo(inputText)),
//   clearCompleted: () => dispatch(clearCompletedTodos()),
// });
// export default connect(mapStateToProps, mapDispatchtoProps)(App);

