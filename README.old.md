# react-list

阅读资料：
 
* [setState：这个API设计到底怎么样](https://zhuanlan.zhihu.com/p/25954470)

> react 生命周期钩子
React 的生命周期包括三个阶段：mount（挂载）、update（更新）和 unmount（移除）

#### mount 在第一次将组件插入页面的过程
* constructor()   初始化 props 和 state
* componentWillMount()    即将插入页面
* render()    将 render 中 return 的内容插入到页面
* componentDidMount()   插入页面完成

#### update 如果数据有任何变动，就会来到 update 过程
* componentWillReceiveProps(nextProps)   我要读取 props 啦！
* shouldComponentUpdate(nextProps, nextState)    请问要不要更新组件？true / false
* componentWillUpdate()     我要更新组件啦！
* render()   更新！
* componentDidUpdate()    更新完毕啦！

#### unmount 当一个组件将要从页面中移除时，会进入 unmount 过程，这个过程就一个钩子
* componentWillUnmount()    我要移除

### 一般，我们只在这几个钩子里 setState：
* componentWillMount
* componentDidMount
* componentWillReceiveProps