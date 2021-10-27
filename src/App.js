import React from "react"
import TodoItem from "./TodoItem";
import todosData from "./TodoData";
import "../src/styles.css"

class App extends React.Component {
  // Converting raw data into an array of html element via TodoItem functional component
  constructor(){
    super()
    this.state ={
        todos:todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id){
    this.setState(prevState=>{
      const updatedTasks = prevState.todos.map(task=>{
        if (task.id === id){
          task.completed = !task.completed
        } 
        return task
      })
      return{todos:updatedTasks}
    })
  }

  render()
  {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} task={item}
    handleChange={this.handleChange}/>)
    
    return (
      <div className ="todo-list">
        {todoItems}
      </div>
    )
}
} 


export default App;
