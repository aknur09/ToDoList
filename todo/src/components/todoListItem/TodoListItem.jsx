import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
  render() {
    const { title, delTodo, id } = this.props;
    return (
      <span className='d-flex align-items-center ' >
        <span className='flex-grow-1'>{this.props.aty}</span>
        <button className='btn btn-outline-danger'onClick={() => delTodo(id)}  ><i className="bi bi-trash3"></i></button>
        <button  className='btn btn-outline-warning'><i className="bi bi-exclamation-triangle"></i></button>
    
      </span>
    )
  
  }
}
