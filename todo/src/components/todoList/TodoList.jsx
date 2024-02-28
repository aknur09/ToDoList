import React from 'react'
import './TodoList.css'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = ({ todos , delTodo}) => {
  return (
    <ul className='list-group'>
      {todos.map((el) =>(
   <li className='list-group-item' key={el.id}><TodoListItem aty={el.title}delTodo={delTodo} id={el.id} /></li>
      ))}

    </ul>


  )
}

export default TodoList 