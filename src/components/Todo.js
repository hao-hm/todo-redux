import React, {PropType} from 'react';

const Todo = ({onClick, completed, text}) =>(
  <li onClick={onClick}
  style={{
    textDecoration: completed? 'line-through': 'none'
  }}>
    {text}
  </li>
);

Todo.prototype = {
  onClick: PropType.func.isRequired,
  completed: PropType.bool.isRequired,
  text: PropType.string.isRequired
};

export default Todo;
