import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './todo/todoInput'
import TodoItem from './todo/todoItem'

class App extends Component {
  constructor(){
    super()

    this.state = {
      title : '测试标题',
      newTodo : '',
      todoList : [
        {
          id: 1,
          msg : '我的第一个待办',
          isDelete : false,
          hasDone : false
        },
        {
          id: 2,
          msg : '我的第二个待办',
          isDelete : true,
          hasDone : false
        },
        {
          id: 3,
          msg : '我的第三个待办',
          isDelete : true,
          hasDone : false
        }
      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
          <li key={item.id}>
            <TodoItem todo={item}></TodoItem>
          </li>
      )
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="title">
          {this.state.title}
        </div>
        <div className="input-box">
          <TodoInput newTodo={this.state.newTodo}></TodoInput>
        </div>
        <h4>待办列表</h4>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
