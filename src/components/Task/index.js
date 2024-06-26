import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

export default function Task({ initTask, initSubtasks, onClick }) {
  const [subtasks, setSubtasks] = useState(initSubtasks);
  const [task, setTask] = useState(initTask);
  const [isDeleted, setIsDeleted] = useState(false);
  const [detailBox, setDetailBox] = useState(null);

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagRef = useRef(null);

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
            className={styles.doneButton}
            onClick={() => {
              subtasks.map((subtask) => {
                subtask.done = !task.done;
              });
              setTask({
                ...task,
                done: !task.done,
              });
            }}
          >
            {'\u2713'}
          </button>

          <button className={styles.deletebutton} onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>

          <div
            className={task.done ? styles.nameDone : styles.name}
            onClick={() => {
              setDetailBox({
                task: task,
              });
            }}
          >
            {task.name}
          </div>
        </div>

        <div className={styles.description}>{task.description}</div>
        <div className={styles.labels}>
          {task.labels?.map((label, index) => (
            <span key={index} className={styles.label}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
              >
                <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.tag}>{task.tag}</div>

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

      <div className={styles.subtasksAndDetail}>
        <div className={styles.subTasks}>
          {subtasks.map((subtask) => (
            <Task
              key={subtask.id}
              initTask={subtask}
              initSubtasks={subtask.subtasks}
            />
          ))}
        </div>

        <div className={detailBox ? styles.detailBoxShow : null}>
          <button
            className={styles.closeButton}
            onClick={() => {
              setDetailBox(null);
            }}
          >
            X
          </button>
          <textarea
            ref={nameRef}
            className={detailBox ? styles.detailBoxName : styles.invisible}
            placeholder="Input Task Name."
            defaultValue={detailBox ? detailBox.task.name : null}
          ></textarea>
          <textarea
            ref={descriptionRef}
            className={
              detailBox ? styles.detailBoxDescription : styles.invisible
            }
            placeholder="Input Task Description."
            defaultValue={detailBox ? detailBox.task.description : null}
          ></textarea>
          <textarea
            ref={tagRef}
            className={detailBox ? styles.detailBoxTag : styles.invisible}
            placeholder="Input someone name for @."
            defaultValue={detailBox ? detailBox.task.tag : null}
          ></textarea>

          <button
            className={detailBox ? styles.detailSaveButton : styles.invisible}
            onClick={() => {
              setTask({
                ...task,
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                tag: '@' + tagRef.current.value,
              });
              setDetailBox(null);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
