// make combined reducers so you can add later

import { combineReducers } from 'redux';
import {  todos } from '../todos';

export default combineReducers({ reducers:
    todos

})

// import { combineReducers } from "redux";
// import { todos } from "./reducer";
// export default combineReducers({
//   todos,
// });