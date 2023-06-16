import { useState } from 'react';
import './App.css';
import DisplayTasks from './components/DisplayTasks';
import Items from './components/Items';

function App() {

  const [taskList, setTaskList] = useState([
    {
      task: 'Read a book',
      completed: false
    },
    {
      task: 'Play a game',
      completed: false
    },
    {
      task: 'Go get groceries',
      completed: false
    },
    {
      task: 'Sing a song',
      completed: false
    }
]);

  const addTask = (newTask) => {
    setTaskList(currentTask => [...currentTask, newTask])
  }

  const deleteTask = (i) => {
    setTaskList(currentTask => currentTask.filter((task, index) => index !== i ))
  }

  const checkTask = (i) => {
    const updateTask = [...taskList];
    updateTask[i].completed === false ?
    updateTask[i].completed = true :
    updateTask[i].completed = false
    setTaskList(updateTask)
  }

  return (
    <div className="App">
      <h1>Todo List: </h1>
      <Items addTask={addTask} />
      <DisplayTasks taskList={taskList} setTaskList={setTaskList} deleteTask={deleteTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
