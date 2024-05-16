
import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './styles.module.css';


export default function Task({initTask , initSubtasks}) {
  const [subtasks, setSubtasks] = useState(initSubtasks);
  const [task,setTask] = useState(initTask);
  const [isDeleted, setIsDeleted] = useState(false);
  

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; 
  }
  

  return (
    <div className={styles.wrapper}>
      <div className={task.done ? styles.mainTaskDone : styles.mainTask}>
        <div className={styles.firstLine}>

          <button
            className={styles.doneButton} onClick={() => {
              
              subtasks.map((subtask) => {
                subtask.done=!task.done;
          
              })
              setTask({
                ...task,
                done: !task.done,
              });

              console.log(task);
            }}>

            {"\u2713"} </button>

          <button className={styles.deletebutton} onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>

          <div className={task.done ? styles.nameDone : styles.name}>{task.name}</div>
        </div>
        

        
        <div className={styles.description}>{task.description}</div>
        
        <div className={styles.labels}>
          {task.labels?.map((label, index) => (
            <span key={index} className={styles.label}>{label}</span>

          ))}
        </div>




        <button
          className={styles.button}
          onClick={() => {
            setSubtasks([
              ...subtasks,
              {
                id: nanoid(),
                name: 'New Subtask',
                done: 0,
                description: 'New Detail.',
                subtasks: [],
              },
            ]);
          }}
        >
          +
        </button>
      </div>

      <div className={styles.subTasks}>
        {subtasks.map((subtask) => {
          
          return (
            <Task
              initTask={subtask}
              initSubtasks={subtask.subtasks}
            />            
          )

        })}

      </div>
    </div>
  );
}
