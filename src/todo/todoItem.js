import React , {Component} from 'react';

class TodoItem extends Component{
  render(){
    return <div><i className="iconfont icon-icon_right_fill"></i>{this.props.todo.id} - {this.props.todo.msg}<i className="iconfont icon-icon_delete"></i></div>
  }
}

export default TodoItem