import styles from './page.module.css';
import Tasks from '@/components/Tasks';

export default function Home() {
  return (
    <div className={styles.main}>
      <Tasks />
    </div>
  );
}
