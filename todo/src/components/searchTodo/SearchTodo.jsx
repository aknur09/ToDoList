import React, { Component } from 'react'
import './SearchTodo.css'

export default class SearchTodo extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" className='form-control'/>
 
            <button className='btn btn-info'>all</button>
            <button className='btn btn-outline-secondary'>active</button>
            <button className='btn btn-outline-secondary'>done</button>
   
      </div>
    )
  }
}
