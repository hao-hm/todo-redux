import React, {Proptypes} from  'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick})=>(
  <ul>
    {todos.map(todo=>
      <Todo
        key={todo.id}
        {...todo}
        onClick={()=>onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: Proptypes.func.isRequired
};

export default TodoList;