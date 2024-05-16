import styles from './styles.module.css';
import { nanoid } from 'nanoid';

export default function AddMainButton({ tasks, setTasks }) {
  return (
    <button
      className={styles.mainButton}
      onClick={() => {
        setTasks([
          ...tasks,
          {
            id: nanoid(),
            name: 'New Maintask',
            description: 'New Detail.',
            subtasks: [],
          },
        ]);
      }}
    >
      +
    </button>
  );
}
