import React, { useState } from 'react';

const Items = (props) => {

    const [task, setTask] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            task: task,
            completed: false
        }
        props.addTask(newTask)
        console.log(task)
        setTask('');
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Add new task: </label>
        <input type="text" value={task} onChange={ (e) => setTask(e.target.value)}/>
        <input type="submit" value="Add" />
    </form>
    
    </>
  )
}

export default Items