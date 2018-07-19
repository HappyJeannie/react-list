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
        <Header></Header>
        <main>
          <div className="todoList">
            <div className="input-box">
              <TodoInput newTodo={this.state.newTodo}></TodoInput>
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
}

export default App;
