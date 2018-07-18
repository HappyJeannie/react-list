import React from 'react';

class Title extends React.Component{
  constructor(){
    super()

    this.state = {
      title : '测试标题'
    }
  }

  render(){
    return <h1>{this.state.title}</h1>
  }
}