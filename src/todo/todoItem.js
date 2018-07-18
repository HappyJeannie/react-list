import React , {Component} from 'react';

class TodoItem extends Component{
  render(){
    return <div>{this.props.todo.id} - {this.props.todo.msg}</div>
  }
}

export default TodoItem