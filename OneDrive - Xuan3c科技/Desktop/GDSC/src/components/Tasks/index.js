'use client';

import { useState } from 'react';
import Task from '@/components/Task';
import styles from './styles.module.css';
import { initialTasks } from '@/data/tasks';
import AddMainButton from '@/components/AddMainButton';

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  
  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <Task
          initSubtasks={task.subtasks}
          initTask={task}
        />
      ))}   
      <AddMainButton tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
