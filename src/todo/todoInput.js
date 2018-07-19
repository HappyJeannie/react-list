import React from 'react';

class TodoInput extends React.Component{
  render(){
    return <input type="text" value={this.props.newTodo} placeholder="新建待办" onKeyPress={this.submit.bind(this)} onChange={this.changeTitle.bind(this)}/>
  }
  submit(e){
    if(e.key === 'Enter'){
      console.log('敲回车')
      this.props.onSubmit(e);
      
    }
  }
  changeTitle(e){
    this.props.onChange(e);
  }
}

export default TodoInput