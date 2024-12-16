import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, updateTodo, removeTodo } = todosSlice.actions;

export const fetchTodos = () => async dispatch => {
  const response = await axios.get('/');
  dispatch(setTodos(response.data));
};

export const addTodoAPI = (todo) => async dispatch => {
  const response = await axios.post('/', todo);
  dispatch(addTodo(response.data));
};

export const updateTodoAPI = (todo) => async dispatch => {
  const response = await axios.put(`/${todo.id}`, todo);
  dispatch(updateTodo(response.data));
};

export const removeTodoAPI = (id) => async dispatch => {
  await axios.delete(`/${id}`);
  dispatch(removeTodo(id));
};

export default todosSlice.reducer;
