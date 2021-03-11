import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoData: data
    }
  }

  addTask = (taskName) => {
    this.setState({
      todoData: [...this.state.todoData, 
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = (itemId) => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList todoData={this.state.todoData} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
