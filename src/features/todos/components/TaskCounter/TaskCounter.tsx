'use client';

import { Button } from '@/components/Button/Button';
import { clearCompleted } from '../../actions';
import styles from './TaskCounter.module.css';

interface TaskCounterProps {
  activeCount: number;
}

export const TaskCounter: React.FC<TaskCounterProps> = ({ activeCount }) => {
  const handleClearCompleted = async () => {
    await clearCompleted();
  };

  return (
    <div className={styles.taskCounter}>
      <span className={styles.count}>{activeCount} 個のタスク</span>
      <Button
        onClick={handleClearCompleted}
        variant="secondary"
        className={styles.clearButton}
      >
        完了したタスクを削除
      </Button>
    </div>
  );
};
