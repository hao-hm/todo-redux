let nextTodoId = 0;
//1. Takes the text from AddTodo field and returns proper "Action" objet to send to other components
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text, //ES6, same as text: text in ES5
});

//2. Takes filter string and return proper "Action" object to send to other components
export const setVisibilityFilter = (filter) =>({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

//3. Takes Todo item's id and returns proper "Action" Object to send to other components

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
