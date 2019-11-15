export default {
  ADD_FIELD: (state, value) => {
    state.todos.push(value);
  },
  DELETE_FIELD: (state, index) => {
    state.todos.splice(index, 1);
  },
  MODIFY_FIELD: (state, {index, value}) => {
    state.todos[index] = value;
  }
}
