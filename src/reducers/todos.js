import { todosList as initialState } from "../todos";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "../actions/actions";
import { v4 as uuid } from "uuid";

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newId = uuid();
      const newTodo = {
        userId: 1,
        id: newId,
        title: action.payload.inputText,
        completed: false,
      };
      return {
        ...state,
        [newId]: newTodo,
      };
    }
    case TOGGLE_TODO: {
      const newTodos = { ...state };
      const { id } = action.payload;
      newTodos[id].completed = !newTodos[id].completed;
      return newTodos;
    }
    case DELETE_TODO: {
      const newTodos = { ...state };
      delete newTodos[action.payload.id];
      return newTodos;
    }
    case CLEAR_COMPLETED_TODOS: {
      const newTodos = { ...state };
      for (const todo in newTodos) {
        if (newTodos[todo].completed) {
          delete newTodos[todo];
        }
      }
      return newTodos;
    }
    default:
      return state;
    }
  };
    // todos reducer, this can be imported other places 
    // import {initialTodos as initialTodos} from "../todos";
    // import {ADDTODO, TOGGLETODO} from "./actions/todosActions";
    // import {v4 as uuid} from "uuid";
    
    // export const todos = (state = initialTodos, action) => {
    //     switch (action.type) {
    //         case ADDTODO: {
    //             const newId = uuid()
    //             const newTodo = {
    //                 "userId": 1,
    //                 "id": newId,
    //                 "title": action.payload.input,
    //                 "completed": false
    //             }
    //             return{
    //                 ...state, [newId]: newTodo
    //             };
    //         }
    
    //         case TOGGLETODO:{
    //             const newToDos = todos.map((todo) => {
    //                 if (id === todo.id) {
    //                   return { ...state, completed: !todo.completed };
    //                 }
    //                 return todo[action.payload.id];
    //               });
    //               setTodos(newToDos);
    //         }
        
    //         default:
    //             return state;
    //     }
    // }