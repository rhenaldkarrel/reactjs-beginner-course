import React from 'react';
import TodoItem from './components/TodoItem'
import TodoData from './components/TodoData'

// function App(){
//   const todoComponents = TodoData.map(list => <TodoItem id={list.id} todo={list}/>)
//   return (
//     <div className="todo-list">
//       {todoComponents}
//     </div>
//   )
// }

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoComponents = this.state.todos.map(list => <TodoItem id={list.id} todo={list} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default App;
