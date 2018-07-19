import React , {Component} from 'react';

class TodoItem extends Component{
  render(){
    return <div className={this.props.todo.status === 'complete'?"isdone":""} ><i className="iconfont icon-icon_right_fill" onClick={this.toggle.bind(this)}></i><span>{this.props.todo.id} - {this.props.todo.msg}</span><i className="iconfont icon-icon_delete"></i></div>
  }
  toggle(e){
    console.log('点击事件')
    this.props.onToggle(e,this.props.todo);
  }
}

export default TodoItem