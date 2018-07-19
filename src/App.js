import 'normalize.css';
import './css/reset.css';
import './css/iconfont.css';

import React, { Component } from 'react';
import './App.css';
import TodoInput from './todo/todoInput';
import TodoItem from './todo/todoItem';
import Footer from './components/Footer/footer'
import Header from './components/Header/header'

class App extends Component {
  constructor(){
    super()

    this.state = {
      newTodo : '',
      todoList : [
        {
          id: 1,
          msg : '我的第一个待办',
          isDelete : false,
          status : 'complete'
        },
        {
          id: 2,
          msg : '我的第二个待办',
          isDelete : true,
          status : 'complete'
        },
        {
          id: 3,
          msg : '我的第三个待办',
          isDelete : true,
          status : 'complete'
        }
      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
          <li key={item.id}>
            <TodoItem todo={item} onToggle={this.toggle.bind(this)}></TodoItem>
          </li>
      )
    })


    return (
      <div className="App">
        <Header></Header>
        <main>
          <div className="todoList">
            <div className="input-box">
              <TodoInput newTodo={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}></TodoInput>
              <i className="icon iconfont icon-icon_add"></i>
            </div>
            <h4>待办列表</h4>
            <ol>
              {todos}
            </ol>
          </div>
          
        </main>
        
        <Footer></Footer>
      </div>
    );
  }
  addTodo(event){
    this.state.todoList.push({
      id: this.state.todoList.length + 1,
      msg: event.target.value,
      status: null,
      isDelete: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  toggle(e,todo){
    console.log(e)
    console.log(todo)
    todo.status = todo.status === 'complete' ? '' : 'complete';
    this.setState(this.state);
  }
}

export default App;

function idMaker(){
  return parseInt(Math.random() * 10000);
}
