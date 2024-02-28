import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/appHeader/AppHeader'
import SearchTodo from './components/searchTodo/SearchTodo'
import TodoAdd from './components/todoAdd/TodoAdd'
import TodoList from './components/todoList/TodoList'
import TodoListItem from './components/todoListItem/TodoListItem'

export default class App extends Component {
  state={
    todoData:[
      {title:'Learn React', id:1, done:false, important:false},
      {title:'Learn Redux', id:2, done:false, important:false},
      {title:'Learn Typescript', id:3, done:false, important:false},
      {title:'Learn Ang', id:4, done:false, important:false},
  
    ]
  }

 
  delTodo = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  }
  render() {
    return (
      <div style={{width:'500px', margin: '0 auto'}}>
        <AppHeader/>
        <SearchTodo/>
        <TodoList todos={this.state.todoData} delTodo={this.delTodo} />
      
        <TodoAdd/>
      </div>
    )
  }
}

