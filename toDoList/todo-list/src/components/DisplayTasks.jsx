import React from 'react'
import styles from './Display.module.css';


const DisplayTasks = (props) => {


    return (
        <ul>
            {
                props.taskList.map((task, i) =>
                    <>
                        {
                            task.completed === true ?
                            <li style={{textDecoration: 'line-through'}} key={i} > {task.task} </li> :
                            <li key={i} > {task.task} </li>
                        }
                        <label>Done: </label>
                        <input type="checkbox" onClick={ () => props.checkTask(i) } /> <br />
                        <button className={styles.mb} onClick={ () => props.deleteTask(i) }>Delete</button>
                    </>
                )}
        </ul>
    )
}

export default DisplayTasks