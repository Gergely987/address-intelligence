export default {
  addField: (state, value) => {
    state.commit('ADD_FIELD', value)
  },
  deleteField: (state, index) => {
    state.commit('DELETE_FIELD', index)
  },
  modifyField: (state, { index, value }) => {
    if (state.state.todos[index] && state.state.todos[index] != value ) {
      state.commit('MODIFY_FIELD', {index, value})
    }
  }
}
