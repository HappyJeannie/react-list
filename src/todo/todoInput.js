import React from 'react';

class TodoInput extends React.Component{
  render(){
    return <input type="text" value={this.props.newTodo} placeholder="新建待办"/>
  }
}

export default TodoInput